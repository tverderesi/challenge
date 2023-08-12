import bcrypt from "bcryptjs";
import User from "../../models/User";
import { validateRegisterInput } from "../../validators/registerInput";
import { GraphQLError } from "graphql";
import { generateToken } from "../../utils/generateToken";
import { IUserInput } from "../../@types/IUserInput";
import { ObjectId } from "mongoose";
import { queryBuilder } from "../../utils/queryBuilder";
import { IUserLoginInput } from "../../@types/IUserLogin";
import { IUserUpdateInput } from "../../@types/IUserUpdateInput";

export const userResolver = {
  Query: {
    /**
     * @description This resolver is responsible for querying users by text fields.
     * @param {Object} _ - The parent object
     * @param {Object} queryUser - The query object containing the text fields
     * @param {Object} sorting - The sorting options
     * @param {Object} pagination - The pagination options
     * @param {Object} dateOptions - The date filtering options
     * @returns {Array} - An array containing the users that match the query
     */

    users: async (_: any, queryUser) => {
      const { query, sort, page, limit } = queryBuilder({ queryUser });

      const users = await User.find(query)
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(Number(limit));
      return users;
    },
    user: async (_, { id }) => {
      const user = await User.findOne({ _id: id });
      if (!user) {
        throw new GraphQLError("Nenhum Usuário encontrado.", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      return user;
    },
    userCount: async (_: any, queryUser) => {
      const { query } = queryBuilder({ queryUser });

      const users = await User.countDocuments(query);

      return users;
    },
  },

  Mutation: {
    /**
     * @description This resolver is responsible for registering a new user.
     * @param _ parent object
     * @param {Object} userInput - The user input object
     *
     * @returns A JWT token containing the user data.
     */

    register: async (_: any, { userInput }: { userInput: IUserInput }) => {
      const { username, email, fullName, cpf, password, confirmPassword, role } = userInput;

      if (!username || !email || !fullName || !cpf || !password || !confirmPassword || !role) {
        throw new GraphQLError("Todos os campos são obrigatórios.", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const errors = await validateRegisterInput({
        username,
        email,
        cpf,
        password,
        confirmPassword,
        role,
      });

      if (errors.length > 0) {
        errors.forEach((error) => {
          throw new GraphQLError(error, {
            extensions: { code: "BAD_USER_INPUT" },
          });
        });
      } else {
        const passwordHash = await bcrypt.hash(password, 12);
        const newUser = new User({
          username,
          fullName,
          cpf,
          role,
          email,
          passwordHash,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });

        const result = await newUser.save();

        const token = await generateToken(result);

        return { token };
      }
    },

    /**
     * @description This resolver is responsible for logging in a user.
     * @param _ parent object
     * @param {Object} loginInput - The login input object
     * @returns A JWT token containing the user data.
     * @throws {GraphQLError} - If the user is not found or the password is incorrect.
     */

    login: async (_: any, { loginInput }: { loginInput: IUserLoginInput }) => {
      const { input, password } = loginInput;

      const user = await User.findOne({
        $or: [
          { username: { $regex: new RegExp(input, "i") } },
          { email: { $regex: new RegExp(input, "i") } },
        ],
      });

      if (!user) {
        throw new GraphQLError("Usuário não encontrado!", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      const match = await bcrypt.compare(password, user.passwordHash);
      if (!match) {
        throw new GraphQLError("Senha incorreta!", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      const token = await generateToken(user);
      return { token };
    },

    /**
     * @description This resolver is responsible for updating a user.
     * @param _ parent object
     * @param {Object} userInput - The user input object
     * @returns A JWT token containing the user data.
     * @throws {GraphQLError} - If the user is not found.
     */

    updateUser: async (_: any, { userInput }: { userInput: IUserUpdateInput }) => {
      const { id, ...updateData } = userInput;
      const filteredUpdateData = {};
      Object.keys(updateData).forEach((key) => {
        if (updateData[key] !== null && updateData[key] !== "password") {
          filteredUpdateData[key] = updateData[key];
        }
      });
      if ((await User.findOne({ _id: id })) === null) {
        throw new GraphQLError("Usuário não encontrado!", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      const result = await User.updateOne({ id }, filteredUpdateData);

      return "Usuário atualizado com sucesso!";
    },

    /**
     * @description This resolver is responsible for soft deleting a user, i.e., setting the deletedAt field to the current date.
     * @param _ parent object
     * @param {Object} _id - The user id
     * @returns A success message.
     * @throws {GraphQLError} - If the user is not found.
     * @throws {GraphQLError} - If the user is already deleted.
     * @throws {GraphQLError} - If the user is the last admin.
     */

    softDeleteUser: async (_: any, _id: ObjectId) => {
      const isUserDeleted = await User.findOne({
        _id,
        deletedAt: { $ne: null },
      });

      if (isUserDeleted) {
        throw new GraphQLError("Usuário já deletado!", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const isLastAdmin =
        (await User.countDocuments({
          role: "ADMIN",
          deletedAt: null,
        })) === 1;

      if (isLastAdmin) {
        throw new GraphQLError("Você não pode deletar o último administrador!", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const result = await User.updateOne({ _id }, { deletedAt: new Date().toISOString() });
      if (result.modifiedCount === 0) {
        throw new GraphQLError("Usuário não encontrado!", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      return "Usuário deletado com sucesso!";
    },

    /**
     * @description This resolver is responsible for hard deleting a user, i.e., removing the user from the database.
     * @param _ parent object
     * @param {Object} _id - The user id
     * @returns A success message.
     * @throws {GraphQLError} - If the user is not found.
     * @throws {GraphQLError} - If the user is the last admin.
     */

    hardDeleteUser: async (_: any, _id: ObjectId) => {
      const isLastAdmin =
        (await User.countDocuments({
          role: "ADMIN",
          deletedAt: null,
        })) === 1;
      if (isLastAdmin) {
        throw new GraphQLError("Você não pode deletar o último administrador!", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const result = await User.deleteOne({ _id });
      if (result.deletedCount === 0) {
        throw new GraphQLError("Usuário não encontrado!", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      return "Usuário deletado com sucesso!";
    },

    /**
     * @description This resolver is responsible for restoring a user, i.e., setting the deletedAt field to null.
     *
     * @param _ parent object
     * @param {Object} _id - The user id
     * @returns A success message.
     * @throws {GraphQLError} - If the user is not found.
     * @throws {GraphQLError} - If the user is not deleted.
     *
     *
     *  */

    restoreUser: async (_: any, _id: ObjectId) => {
      const isUserDeleted = await User.findOne({
        _id,
        deletedAt: { $ne: null },
      });

      if (!isUserDeleted) {
        throw new GraphQLError("Usuário não deletado!", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      await User.findByIdAndUpdate(_id, { deletedAt: null });
      return "Usuário reativado com sucesso!";
    },
  },
};

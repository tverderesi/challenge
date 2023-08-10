import { ObjectId } from "mongoose";

interface IUserInputValidator {
  username: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
  role: string;
}

interface IUserInput extends IUserInputValidator {
  fullName: string;
}

interface IUserLoginInput {
  input: string;
  password: string;
}

interface IUserUpdateInput {
  id: ObjectId;
  username?: string;
  email?: string;
  fullName?: string;
  cpf?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
}

interface IQueryUserFields {
  _id?: ObjectId;
  username?: string;
  email?: string;
  fullName?: string;
  cpf?: string;
  role?: string;
  userStatus?: "ACTIVE" | "INACTIVE" | "ALL" | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

interface IPaginationOptions {
  page?: number;
  limit?: number;
}

interface ISortingOptions {
  sortField?: string;
  order?: "ASC" | "DESC";
}

interface IDateOptions {
  startDate?: Date;
  endDate?: Date;
  dateField?: "createdAt" | "updatedAt" | "deletedAt";
}

interface IQueryUser
  extends IDateOptions,
    IPaginationOptions,
    ISortingOptions,
    IQueryUserFields {}

export {
  IUserInput,
  IUserInputValidator,
  IUserLoginInput,
  IUserUpdateInput,
  IQueryUserFields,
  IPaginationOptions,
  ISortingOptions,
  IQueryUser,
};

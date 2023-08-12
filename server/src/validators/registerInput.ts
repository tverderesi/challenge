import { IUserInputValidator } from "../@types/IUserInputValidator";
import { validateCPF } from "./cpf";
import { validateEmail } from "./email";
import { validatePassword } from "./password";
import { validateRole } from "./role";
import { validateUsername } from "./username";

/**
 * @description This function is responsible for validating the user input when registering a new user.
 * @param {Object} userInput - The user input object
 * @returns {Array} - An array containing the errors
 * @async
 * @example
 * const errors = await validateRegisterInput(userInput);
 * if (errors.length > 0) {
 *  errors.forEach((error) => {
 *   throw new GraphQLError(error, {
 *   extensions: { code: "BAD_USER_INPUT" },
 *  });
 */

//TODO: Find a way to validate this function, since it means I will have to mock the User model, possibly using a mock database.
async function validateRegisterInput(userInput: IUserInputValidator): Promise<string[]> {
  const errors: string[] = [];
  const { username, email, password, confirmPassword, cpf, role } = userInput;

  const usernameErrors = await validateUsername(username);
  const emailErrors = await validateEmail(email);
  const passwordErrors = await validatePassword(password, confirmPassword);
  const cpfErrors = await validateCPF(cpf);
  const roleErrors = await validateRole(role);

  errors.push(...usernameErrors, ...emailErrors, ...passwordErrors, ...cpfErrors, ...roleErrors);

  return errors;
}

export { validateRegisterInput };

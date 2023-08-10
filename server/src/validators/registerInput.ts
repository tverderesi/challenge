import { IUserInputValidator } from "../types/IUser";
import { validateCPF } from "./cpf.js";
import { validateEmail } from "./email.js";
import { validatePassword } from "./password.js";
import { validateRole } from "./role.js";
import { validateUsername } from "./username.js";

//TODO: Check Why can't I just reference the imports without add the .js extension?

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

async function validateRegisterInput(
  userInput: IUserInputValidator
): Promise<string[]> {
  const errors: string[] = [];
  const { username, email, password, confirmPassword, cpf, role } = userInput;

  const usernameErrors = await validateUsername(username);
  const emailErrors = await validateEmail(email);
  const passwordErrors = await validatePassword(password, confirmPassword);
  const cpfErrors = await validateCPF(cpf);
  const roleErrors = await validateRole(role);

  errors.push(
    ...usernameErrors,
    ...emailErrors,
    ...passwordErrors,
    ...cpfErrors,
    ...roleErrors
  );

  return errors;
}

export { validateRegisterInput };

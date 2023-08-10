import User from "../models/User.js";

/**
 * @description This function is responsible for validating if a given username is valid.
 * @param {String} username - The username to be validated
 * @returns {Array} - An array containing the errors
 * @async
 * @example
 * const errors = await validateUsername(username);
 * if (errors.length > 0) {
 * errors.forEach((error) => {
 * throw new GraphQLError(error, {
 * extensions: { code: "BAD_USER_INPUT" },
 * });
 * });
 * }
 *
 * @todo Add a test for this function
 */
//TODO: Add a test for this function
export async function validateUsername(username) {
  const errors: string[] = [];

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    errors.push("Nome de Usuário já existe!");
  }
  return errors;
}

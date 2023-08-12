import User from "../models/User";

/**
 * @description This function is responsible for validating if a given email is valid and unique.
 * @param {String} email - The email to be validated
 * @returns {Array} - An array containing the errors
 * @async
 * @example
 * const errors = await validateEmail(email);
 * if (errors.length > 0) {
 * errors.forEach((error) => {
 * throw new GraphQLError(error, {
 * extensions: { code: "BAD_USER_INPUT" },
 * });
 * });
 * }
 * @todo Add a test for this function
 */
//TODO: Add a test for this function;
export async function validateEmail(email: string) {
  const errors: string[] = [];

  const pattern = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!pattern.test(email)) {
    errors.push("Email inválido!");
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    errors.push("Email já cadastrado!");
  }

  return errors;
}

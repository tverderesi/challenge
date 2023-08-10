import User from "../models/User.js";
import { checkCPF } from "../utils/checkCPF.js";

/**
 * @description This function is responsible to validate the CPF, it checks if the CPF is valid using the @checkCPF function.
 * @param {string} cpf - The CPF to be validated
 * @returns {Array} - An array containing the errors
 * @async
 * @example
 * const errors = await validateCPF(cpf);
 * if (errors.length > 0) {
 * errors.forEach((error) => {
 * throw new GraphQLError(error, {
 * extensions: { code: "BAD_USER_INPUT" },
 * });
 * });
 * }
 * @see checkCPF
 *
 */
export async function validateCPF(cpf: string) {
  const errors = [];

  const existingUser = await User.findOne({ cpf });
  if (existingUser) {
    errors.push("CPF já cadastrado!");
  }

  if (!checkCPF(cpf)) {
    errors.push("CPF inválido!");
  }
  return errors;
}

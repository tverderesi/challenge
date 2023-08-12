/**
 * @description This function is responsible for validating if a given role is valid, based on the available roles (ADMIN, STUDENT, TEACHER).
 * @param {String} role - The role to be validated
 * @returns {Array} - An array containing the errors
 * @async
 * @example
 * const errors = await validateRole(role);
 * if (errors.length > 0) {
 * errors.forEach((error) => {
 * throw new GraphQLError(error, {
 * extensions: { code: "BAD_USER_INPUT" },
 * });
 * });
 * }
 */

export async function validateRole(role: string) {
  const errors: string[] = [];

  if (role !== "ADMIN" && role !== "STUDENT" && role !== "TEACHER") {
    errors.push(
      "Tipo de usuário inválido! O tipo de Usuário deve ser 'ADMIN', 'STUDENT' ou 'TEACHER'"
    );
  }

  return errors;
}

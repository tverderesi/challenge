/**
 * @description This function is responsible for validating if a given role is valid, based on the available roles (ADMIN, USER, INSTRUCTOR).
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
 * @todo Add a test for this function
 */
//TODO: Add a test for this function
export async function validateRole(role: string) {
  const errors: string[] = [];

  if (role !== "ADMIN" && role !== "USER" && role !== "INSTRUCTOR") {
    errors.push(
      "Tipo de usuário inválido! O tipo de Usuário deve ser 'ADMIN', 'USER' ou 'INSTRUCTOR'"
    );
  }

  return errors;
}

/**
 * @description This function is responsible for validating if the password and the confirm password are equal,
 * and if the password is valid (8 characters, one uppercase, one lowercase, one number and one special character).
 * @param {string} password - The password
 * @param {string} confirmPassword - The confirm password
 * @returns {Array} - An array containing the errors
 * @async
 * @example
 * const errors = await validatePassword(password, confirmPassword);
 * if (errors.length > 0) {
 * errors.forEach((error) => {
 * throw new GraphQLError(error, {
 * extensions: { code: "BAD_USER_INPUT" },
 * });
 * });
 * }
 * @todo Add more password validation rules
 * @todo Add test cases to this function
 */

export async function validatePassword(password: string, confirmPassword: string) {
  const errors: string[] = [];

  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,26}$/;
  if (!pattern.test(password)) {
    errors.push(
      "Senha inválida! A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    );
  }

  if (password !== confirmPassword) {
    errors.push("Senhas não conferem!");
  }

  return errors;
}

/**
 * @description This function is responsible for validating a user CPF (Certificado de Pessoa Física). It is based on the algorithm described in the link below,
 * which is the same used by the Brazilian government, but it does not check if the CPF is valid in the Receita Federal database, just if its verifier digits are
 * valid according to the algorithm. It accepts CPFs with or without dots and dashes.
 * @link https://pt.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas#C%C3%A1lculo_do_d%C3%ADgito_verificador
 * @param {string} cpf - The user CPF
 * @returns {boolean} - A boolean indicating if the CPF is valid or not
 * @example
 * const isValid = checkCPF(cpf);
 * if (!isValid) {
 * throw new GraphQLError("CPF inválido!", {
 * extensions: { code: "BAD_USER_INPUT" },
 * });
 * }
 * @see validateCPF
 * @todo Add a check to see if the CPF is valid in the Receita Federal database.
 * @todo Add test cases.
 */

//TODO: Add a check to see if the CPF is valid in the Receita Federal database.
//TODO: Add test cases.

export function checkCPF(cpf: string): boolean {
  const cleanedCPF = cpf.replace(/\D/g, "");

  if (!/^(\d{11})$/.test(cleanedCPF)) {
    return false;
  }

  const checkDigit = (array: number[]): number =>
    11 -
    (array
      .map((value, index) => value * (array.length + 1 - index))
      .reduce((a, b) => a + b) %
      11);

  const digits = Array.from(cleanedCPF, Number);

  const [digit1, digit2] = digits.slice(9);

  return (
    checkDigit(digits.slice(0, 9)) === digit1 &&
    checkDigit(digits.slice(0, 10)) === digit2
  );
}

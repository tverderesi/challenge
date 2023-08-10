export const validateCPF = (cpf, search = true) => {
  const cleanCPF = cpf.replace(/\D/g, "");
  const cpfDigits = cleanCPF.split("").map(Number);

  const calculateDigit = (len) => {
    const sum = cpfDigits
      .slice(0, len)
      .reduce((acc, digit, index) => acc + digit * (len + 1 - index), 0);
    const remainder = (sum * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  if (/[A-Za-z]/.test(cpf)) {
    return false;
  } else if (cleanCPF.length <= 11 && search) {
    return true;
  } else if (cleanCPF.length > 11) {
    return false;
  } else if (cleanCPF.length !== 11 && !search) {
    return false;
  } else if (
    calculateDigit(9) !== cpfDigits[9] ||
    calculateDigit(10) !== cpfDigits[10]
  ) {
    return false;
  }

  return true;
};

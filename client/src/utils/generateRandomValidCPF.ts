import { validateCPF } from "./validateCPF";

export const generateRandomValidCPF = () => {
  let cpf = "";
  let valid = false;
  while (!valid) {
    cpf = Math.floor(Math.random() * 99999999999).toString();

    valid = validateCPF(cpf, false);
  }
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

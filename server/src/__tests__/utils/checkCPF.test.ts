import { checkCPF } from "../../utils/checkCPF";

describe("checkCPF", () => {
  it("should return true for a valid CPF without dots and dashes", () => {
    const validCPF = "52684692076";
    const isValid = checkCPF(validCPF);
    expect(isValid).toBe(true);
  });

  it("should return true for a valid CPF with dots and dashes", () => {
    const validCPF = "526.846.920-76";
    const isValid = checkCPF(validCPF);
    expect(isValid).toBe(true);
  });

  it("should return false for an invalid CPF", () => {
    const invalidCPF = "123.456.789-10";
    const isValid = checkCPF(invalidCPF);
    expect(isValid).toBe(false);
  });

  it("should return false for an invalid input format", () => {
    const invalidInput = "not-a-cpf";
    const isValid = checkCPF(invalidInput);
    expect(isValid).toBe(false);
  });

  it("should return false for an empty input", () => {
    const emptyInput = "";
    const isValid = checkCPF(emptyInput);
    expect(isValid).toBe(false);
  });
});

import { validatePassword } from "../../validators/password";

describe("validatePassword function", () => {
  it("should return an empty array for a valid password", async () => {
    const password = "ValidPass123!";
    const confirmPassword = "ValidPass123!";
    const errors = await validatePassword(password, confirmPassword);
    expect(errors).toEqual([]);
  });

  it("should return an error for passwords not matching", async () => {
    const password = "MismatchedPass1!";
    const confirmPassword = "MismatchedPass2!";
    const errors = await validatePassword(password, confirmPassword);
    expect(errors).toContain("Senhas não conferem!");
  });

  it("should return an error for a password that does not meet requirements", async () => {
    const password = "weakpass";
    const confirmPassword = "weakpass";
    const errors = await validatePassword(password, confirmPassword);
    expect(errors).toContain(
      "Senha inválida! A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    );
  });

  it("should return an error for a password without a special character", async () => {
    const password = "NoSpecial123";
    const confirmPassword = "NoSpecial123";
    const errors = await validatePassword(password, confirmPassword);
    expect(errors).toContain(
      "Senha inválida! A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    );
  });

  it("should return an error for a password without an uppercase letter", async () => {
    const password = "nopassword123!";
    const confirmPassword = "nopassword123!";
    const errors = await validatePassword(password, confirmPassword);
    expect(errors).toContain(
      "Senha inválida! A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    );
  });

  it("should return an error for a password without a lowercase letter", async () => {
    const password = "NOPASSWORD123!";
    const confirmPassword = "NOPASSWORD123!";
    const errors = await validatePassword(password, confirmPassword);
    expect(errors).toContain(
      "Senha inválida! A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    );
  });

  it("should return an error for a password without a digit", async () => {
    const password = "NoDigitPass!";
    const confirmPassword = "NoDigitPass!";
    const errors = await validatePassword(password, confirmPassword);
    expect(errors).toContain(
      "Senha inválida! A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    );
  });

  it("should return an error for a password that is too short", async () => {
    const password = "Sh0rt!";
    const confirmPassword = "Sh0rt!";
    const errors = await validatePassword(password, confirmPassword);
    expect(errors).toContain(
      "Senha inválida! A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    );
  });
});

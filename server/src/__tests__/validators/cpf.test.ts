import { validateCPF } from "../../validators/cpf";
import User from "../../models/User"; // Update the import path for your User model

jest.mock("../../models/User"); // Mock the User model for testing

describe("validateCPF function", () => {
  it("should return an empty array for a valid and unique CPF", async () => {
    (User.findOne as jest.MockedFunction<any>).mockResolvedValue(null); // Mocking a unique CPF scenario
    const cpf = "526.846.920-76";
    const errors = await validateCPF(cpf);
    expect(errors).toEqual([]);
  });

  it("should return an error for an existing CPF", async () => {
    (User.findOne as jest.MockedFunction<any>).mockResolvedValue({ cpf: "526.846.920-76" }); // Mocking an existing CPF scenario
    const cpf = "526.846.920-76";
    const errors = await validateCPF(cpf);
    expect(errors).toContain("CPF já cadastrado!");
  });

  it("should return an error for an invalid CPF", async () => {
    (User.findOne as jest.MockedFunction<any>).mockResolvedValue(null); // Mocking a unique CPF scenario
    const cpf = "123.456.789-09"; // Use an invalid CPF here
    const errors = await validateCPF(cpf);
    expect(errors).toContain("CPF inválido!");
  });
});

import { validateEmail } from "../../validators/email";
import User from "../../models/User"; // Update the import path for your User model

jest.mock("../../models/User"); // Mock the User model for testing

describe("validateEmail function", () => {
  it("should return an empty array for a valid and unique email", async () => {
    (User.findOne as jest.MockedFunction<any>).mockResolvedValue(null); // Mocking a unique email scenario
    const email = "test@example.com";
    const errors = await validateEmail(email);
    expect(errors).toEqual([]);
  });

  it("should return an error for an invalid email format", async () => {
    (User.findOne as jest.MockedFunction<any>).mockResolvedValue(null); // Mocking no email found scenario
    const email = "invalid_email";
    const errors = await validateEmail(email);
    expect(errors).toContain("Email inválido!");
  });

  it("should return an error for a duplicate email", async () => {
    (User.findOne as jest.MockedFunction<any>).mockResolvedValue({ email: "existing@example.com" }); // Mocking an existing email scenario
    const email = "existing@example.com";
    const errors = await validateEmail(email);
    expect(errors).toContain("Email já cadastrado!");
  });
});

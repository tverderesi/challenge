import { validateUsername } from "../../validators/username";
import User from "../../models/User"; // Update the import path for your User model
jest.mock("../../models/User"); // Mock the User model for testing

describe("validateUsername function", () => {
  it("should return an empty array for a valid username", async () => {
    (User.findOne as jest.MockedFunction<any>).mockResolvedValue(null); // Mocking a unique username scenario
    const username = "uniqueusername";
    const errors = await validateUsername(username);
    expect(errors).toEqual([]);
  });

  it("should return an error for an existing username", async () => {
    (User.findOne as jest.MockedFunction<any>).mockResolvedValue({ username: "existingusername" }); // Mocking an existing username scenario
    const username = "existingusername";
    const errors = await validateUsername(username);
    expect(errors).toContain("Nome de Usuário já existe!");
  });
});

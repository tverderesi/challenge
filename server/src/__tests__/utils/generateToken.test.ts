import { generateToken } from "../../utils/generateToken";
import MockedEnv from "mocked-env";
describe("generateToken function", () => {
  it("should generate a token for a user", async () => {
    process.env.JWT_SECRET = "test-secret";

    const user = {
      id: "user-id",
      email: "test@example.com",
      role: "USER",
      fullName: "Test User",
    };

    const token = await generateToken(user);

    expect(typeof token).toBe("string");
    // You can also validate the token using your actual application logic
  });

  it("should throw an error if JWT_SECRET is not defined", async () => {
    const restoreEnv = MockedEnv({
      JWT_SECRET: undefined,
    });

    const user = {
      id: "user-id",
      email: "test@example.com",
      role: "USER",
      fullName: "Test User",
    };

    await expect(generateToken(user)).rejects.toThrow("JWT_SECRET not defined");

    restoreEnv();
  });
});

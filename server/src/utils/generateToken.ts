import { SignJWT } from "jose";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = async (user: any) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined");
    }

    const secretKey = Buffer.from(process.env.JWT_SECRET, "utf8");
    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      role: user.role,
      fullName: user.fullName,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(secretKey);

    return token;
  } catch (error) {
    // Handle the error here
    if (error instanceof Error) throw error; // Re-throw the error if needed
  }
};

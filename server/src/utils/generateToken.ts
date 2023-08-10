import { SignJWT } from "jose";

export const generateToken = async (user: any) => {
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
};

import { ObjectId } from "mongoose";
export interface IUserUpdateInput {
  id: ObjectId;
  username?: string;
  email?: string;
  fullName?: string;
  cpf?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
}

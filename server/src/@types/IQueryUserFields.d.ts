import { ObjectId } from "mongoose";

export interface IQueryUserFields {
  _id?: ObjectId;
  username?: string;
  email?: string;
  fullName?: string;
  cpf?: string;
  role?: string;
  userStatus?: "ACTIVE" | "INACTIVE" | "ALL" | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

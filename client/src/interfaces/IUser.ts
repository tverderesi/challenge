export interface IUser {
  id: number;
  fullName: string;
  username: string;
  email: string;
  password?: string;
  cpf: string;
  role: "ADMIN" | "INSTRUCTOR" | "USER";
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface IUser {
  id: number;
  fullName: string;
  username: string;
  email: string;
  password?: string;
  cpf: string;
  role: "ADMIN" | "TEACHER" | "STUDENT";
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

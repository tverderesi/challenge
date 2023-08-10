import { Maybe } from "./TMaybe";

export interface IQueryUser {
  username?: Maybe<string>;
  fullName?: Maybe<string>;
  cpf?: Maybe<string>;
  email?: Maybe<string>;
  role?: Maybe<"ADMIN" | "INSTRUCTOR" | "USER">;
  userStatus?: "ACTIVE" | "INACTIVE" | "ALL";
}

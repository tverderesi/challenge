import { IUser } from "./IUser";

export type TUserInfoForm = {
  user: IUser;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

import { TextInput } from "../atoms/TextInput";
import { TUserTextField } from "../../interfaces/TUserTextField";
import { IUser } from "../../interfaces/IUser";
export function UserTextField({
  edit,
  user,
  header,
  onChange,
}: {
  edit: any;
  user: IUser;
  header: TUserTextField;
  onChange;
}) {
  return (
    <div className="col-span-2 flex flex-col gap-2">
      {edit ? (
        <TextInput
          placeholder={user[header.id]}
          name={header.id}
          onChange={onChange}
          label={header.name}
        />
      ) : (
        <>
          <span className="text-lg font-semibold capitalize">
            {header.name}
          </span>
          <span className="text-base">{user[header.id]}</span>
        </>
      )}
    </div>
  );
}

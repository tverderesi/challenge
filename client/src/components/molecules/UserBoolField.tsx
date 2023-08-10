import { TextInput } from "../atoms/TextInput";
import { TUserBoolField } from "../../interfaces/TUserBoolField";
import { IUser } from "../../interfaces/IUser";

export function UserBoolField({
  edit,
  header,
  user,
}: {
  edit: any;
  header: TUserBoolField;
  user: IUser;
}) {
  console.log(header);
  return (
    <div className="col-span-2 flex flex-col gap-2 order-last">
      {edit ? (
        <TextInput
          placeholder={!user[header.id] ? header.boolTrue : header.boolFalse}
          name={header.id}
          onChange={() => {}}
          label={header.name}
          disabled
        />
      ) : (
        <>
          <span className="text-lg font-semibold capitalize">
            {header.name}
          </span>
          <span className="text-base">
            {!user[header.id] ? header.boolTrue : header.boolFalse}
          </span>
        </>
      )}
    </div>
  );
}

import { TextInput } from "../atoms/TextInput";
import { formatDate } from "../../utils/formatDate";
import { TUserDateField } from "../../interfaces/TUserDateField";
import { IUser } from "../../interfaces/IUser";

export function UserDateField({
  edit,
  user,
  header,
}: {
  edit: boolean;
  user: IUser;
  header: TUserDateField;
}) {
  return (
    <div className="col-span-2 flex flex-col gap-2 order-last">
      {edit ? (
        <TextInput
          placeholder={formatDate(user[header.id])}
          name={header.id}
          onChange={() => {}}
          label={header.name}
          disabled={true}
        />
      ) : (
        <>
          <span className="text-lg font-semibold">{header.name}</span>
          <span className="text-base">{formatDate(user[header.id])}</span>
        </>
      )}
    </div>
  );
}

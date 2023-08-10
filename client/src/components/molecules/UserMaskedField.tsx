import CustomCPFInput from "../atoms/CPFInput";
import { Select } from "../atoms/Select";
import { maskFunctions } from "../../utils/maskFunctions";
import roles from "../../assets/roles.json";
import { TUserMaskedField } from "../../interfaces/TUserMaskedField";
import { IUser } from "../../interfaces/IUser";

export function UserMaskedField({
  edit,
  header,
  user,
  onChange,
  value,
}: {
  edit: boolean;
  header: TUserMaskedField;
  user: IUser;
  onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
  value: any;
}) {
  const maskFunction = maskFunctions[header.mask];
  return (
    <div className="col-span-2 flex flex-col gap-2">
      {edit ? (
        header.id === "cpf" ? (
          <CustomCPFInput
            placeholder={user[header.id]}
            name={header.id}
            onChange={onChange}
            value={value.cpf}
          />
        ) : (
          <Select
            name={header.id}
            onChange={onChange}
            label="Tipo"
            options={roles}
          />
        )
      ) : (
        <>
          <span className="text-lg font-semibold capitalize">
            {header.name}
          </span>
          <span className="text-base">{maskFunction(user[header.id])}</span>
        </>
      )}
    </div>
  );
}

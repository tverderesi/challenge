import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../graphql/mutations";
import { useState } from "react";
import headers from "../../assets/userHeaders.json";
import { useFormControl } from "../../hooks/useFormControl";
import { UserDateField } from "../molecules/UserDateField";
import { UserMaskedField } from "../molecules/UserMaskedField";
import { UserBoolField } from "../molecules/UserBoolField";
import { UserTextField } from "../molecules/UserTextField";
import { Maybe } from "../../interfaces/TMaybe";
import { disappearingMessage } from "../../utils/disappearingMessage";
import { ReturnModal } from "../molecules/ReturnModal";
import { TUserInfoForm } from "../../interfaces/TUserInfoForm";

export function UserInfoForm({ user, edit, setEdit }: TUserInfoForm) {
  const [error, setError] = useState<Maybe<String>>(null);
  const [success, setSuccess] = useState<Maybe<String>>(null);

  const { onChange, onReset, onSubmit, value } = useFormControl(
    user,
    handleSubmit
  );

  const [updateUser, { loading }] = useMutation(UPDATE_USER, {
    onCompleted: () => {
      disappearingMessage(setSuccess, "Usuário atualizado com sucesso!", 3000);
      setEdit(false);
    },

    onError: (error) => {
      disappearingMessage(setError, error.message, 3000);
    },

    variables: {
      userInput: {
        id: value.id,
        fullName: value.fullName,
        username: value.username,
        email: value.email,
        cpf: value.cpf,
        role: value.role,
      },
    },
  });

  function handleSubmit() {
    updateUser();
  }

  return (
    <form
      className="card-body grid grid-cols-4 gap-4"
      onSubmit={onSubmit}
      onReset={onReset}
    >
      <ReturnModal
        loading={loading}
        success={success}
        error={error}
        message="Atualizando Usuário..."
      />

      {headers.map((header) => {
        if (header.type === "date") {
          return <UserDateField edit={edit} user={user} header={header} />;
        }
        if (header.type === "mask" && header.mask) {
          return (
            <UserMaskedField
              edit={edit}
              user={user}
              header={header}
              onChange={onChange}
              value={value}
            />
          );
        }
        if (header.type === "bool") {
          return <UserBoolField edit={edit} header={header} user={user} />;
        }
        return (
          <UserTextField
            edit={edit}
            user={user}
            header={header}
            onChange={onChange}
          />
        );
      })}

      {edit && (
        <div className="col-span-4 flex justify-end order-last gap-4">
          <input
            type="submit"
            className="btn btn-success"
            value="Atualizar Dados"
          />
          <input type="reset" className="btn btn-info" value="Resetar" />
          <button
            className="btn btn-error"
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancelar
          </button>
        </div>
      )}
    </form>
  );
}

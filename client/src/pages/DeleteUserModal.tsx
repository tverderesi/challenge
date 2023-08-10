import { useMutation } from "@apollo/client";
import { useState } from "react";
import { HARD_DELETE_USER, SOFT_DELETE_USER } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";

export function DeleteUserModal({ id }: { id: string }) {
  const navigate = useNavigate();
  const [hardDelete, setHardDelete] = useState(false);
  const [hardDeleteUser] = useMutation(HARD_DELETE_USER, {
    variables: { id: id },
    onCompleted: () => {
      console.log("Usuário deletado com sucesso!");
      navigate("/lista-de-usuarios", { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [softDeleteUser] = useMutation(SOFT_DELETE_USER, {
    variables: { id: id },
    onCompleted: () => {
      console.log("Usuário deletado com sucesso!");
      navigate("/lista-de-usuarios", { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    if (hardDelete) {
      hardDeleteUser();
    } else {
      softDeleteUser();
    }
  };
  return (
    <>
      <input type="checkbox" id="deleteModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-base-100/95 backdrop-blur-xl">
          <h3 className="font-bold text-2xl bg-warning w-[calc(100%+3rem)] h-10 -m-6 mb-0 p-6 pb-12 text-center">
            Deletar Usuário
          </h3>
          <p className="py-4 text-center text-xl">
            Tem certeza que quer excluir o usuário?
          </p>
          <div className="flex flex-row items-center justify-center">
            <span className="flex flex-row items-center justify-center gap-3">
              <input
                name="hardDelete"
                type="checkbox"
                className="checkbox checkbox-warning mx-auto"
                onClick={() => setHardDelete(!hardDelete)}
              />
              <label htmlFor="hardDelete" className="font-semibold text-lg">
                Hard Delete (Excluir o usuário da base)
              </label>
            </span>
          </div>
          <div className="modal-action">
            <label htmlFor="deleteModal" className="btn">
              Cancelar
            </label>
            <button className="btn btn-error" onClick={handleClick}>
              <span className="material-symbols-outlined symbols-heavy symbols-filled">
                delete
              </span>
              Excluir Usuário
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

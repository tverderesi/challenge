import { useMutation } from "@apollo/client";
import { RESTORE_USER } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
export function RestoreUserModal({ id }: { id: string }) {
  const navigate = useNavigate();
  const [restoreUser] = useMutation(RESTORE_USER, {
    onCompleted: () => {
      navigate("/lista-de-usuarios", { replace: true });
    },
    variables: { id: id },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    restoreUser();
  };
  return (
    <>
      <input type="checkbox" id="restoreModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-info">Reativar Usuário?</h3>
          <p className="py-4">Tem certeza que quer reativar este usuário?</p>
          <div className="modal-action">
            <label htmlFor="restoreModal" className="btn">
              Cancelar
            </label>
            <button className="btn btn-info" onClick={handleClick}>
              <span className="material-symbols-outlined symbols-filled">
                restore_from_trash
              </span>
              Reativar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

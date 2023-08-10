import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_USER } from "../graphql/queries";
import { RoleBadge } from "../components/atoms/RoleBadge";
import { StatusBadge } from "../components/atoms/StatusBadge";
import { UserInfoForm } from "../components/organisms/UserInfoForm";
import { DeleteUserModal } from "./DeleteUserModal";
import { RestoreUserModal } from "./RestoreUserModal";
export const User = () => {
  const [showSection, setShowSection] = useState(false);
  const [edit, setEdit] = useState(false);
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_USER, {
    variables: { userId: id },
  });

  if (error) {
    setTimeout(() => {
      navigate("/lista-de-usuarios", { replace: true });
    }, 3000);
  }

  return (
    <div
      className={`w-full min-h-[calc(100vh-6rem)] flex flex-col items-center ${
        loading ? "justify-center" : "justify-start"
      } pb-10`}
    >
      {loading ? (
        <>
          <span className="loading loading-ring w-32"></span>
          <span className="text-3xl font-semibold  mt-4 text-white">
            Carregando...
          </span>
        </>
      ) : data ? (
        <section className="flex flex-col gap-4 mt-4 w-11/12">
          <section className="shadow-lg bg-accent/20 card border border-black">
            <section className="flex flex-col lg:flex-row gap-3 justify-center md:justify-start items-center p-4 w-auto m-4 mb-0">
              <h2 className="text-3xl font-semibold text-center w-auto flex flex-col md:flex-row items-center justify-start grow">
                <span className="flex flex-row items-center">
                  <span className="material-symbols-outlined symbols-filled text-3xl">
                    person
                  </span>
                  {data?.user?.fullName}
                </span>
                <span className="flex flex-row items-center justify-center mt-2 md:mt-0">
                  <RoleBadge data={data} />
                  <StatusBadge data={data} />
                </span>
              </h2>
              <div className="p-4 lg:p-0 lg:border-none border border-accent/20 rounded-xl lg:justify-self-end flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <h3
                    className="text-center text-xl lg:hidden relative font-semibold flex flex-row items-center justify-center bg-white/10 p-3 rounded-xl"
                    onClick={(e) => {
                      setShowSection(!showSection);
                    }}
                  >
                    Ações
                    <span className="text-3xl absolute top-1.5 right-4 font-semibold">
                      {showSection ? "-" : "+"}
                    </span>
                  </h3>
                </div>
                <div
                  className={`flex flex-col lg:flex-row gap-4 ${
                    showSection ? "" : "hidden lg:flex"
                  }`}
                >
                  {data.user.deletedAt && (
                    <label
                      htmlFor="restoreModal"
                      className="btn btn-secondary lg:w-auto"
                    >
                      <span className="material-symbols-outlined symbols-filled">
                        restore_from_trash
                      </span>
                      Reativar Usuário
                    </label>
                  )}
                  {!edit && (
                    <button
                      onClick={() => setEdit(true)}
                      className={"btn btn-info lg:w-auto"}
                    >
                      <span className="material-symbols-outlined symbols-filled">
                        edit
                      </span>
                      Editar
                    </button>
                  )}
                  <label
                    htmlFor="deleteModal"
                    className={"btn btn-error lg:w-auto"}
                  >
                    <span className="material-symbols-outlined symbols-filled">
                      delete
                    </span>
                    Excluir
                  </label>
                </div>
              </div>
            </section>

            <UserInfoForm user={data.user} edit={edit} setEdit={setEdit} />
          </section>
        </section>
      ) : error ? (
        <div className="alert alert-error text-lg w-1/2">
          <span className="material-symbols-outlined symbols-heavy text-2xl">
            error
          </span>
          {error.message}
        </div>
      ) : null}
      {id && (
        <>
          <DeleteUserModal id={id} />
          <RestoreUserModal id={id} />
        </>
      )}
    </div>
  );
};

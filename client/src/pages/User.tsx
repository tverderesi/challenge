import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";

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

  // const { data, loading, error } = useQuery(GET_USER, {
  //   variables: { userId: id },
  // });

  // if (error) {
  //   setTimeout(() => {
  //     navigate("/lista-de-usuarios", { replace: true });
  //   }, 3000);
  // }

  return (
    <div
      className={`flex min-h-[calc(100vh-6rem)] w-full flex-col items-center ${
        false ? "justify-center" : "justify-start"
      } pb-10`}
    >
      {/* {loading ? (
        <>
          <span className="loading loading-ring w-32"></span>
          <span className="mt-4 text-3xl  font-semibold text-white">Carregando...</span>
        </>
      ) : data ? (
        <section className="mt-4 flex w-11/12 flex-col gap-4">
          <section className="card border border-black bg-accent/20 shadow-lg">
            <section className="m-4 mb-0 flex w-auto flex-col items-center justify-center gap-3 p-4 md:justify-start lg:flex-row">
              <h2 className="flex w-auto grow flex-col items-center justify-start text-center text-3xl font-semibold md:flex-row">
                <span className="flex flex-row items-center">
                  <span className="material-symbols-outlined symbols-filled text-3xl">person</span>
                  {data?.user?.fullName}
                </span>
                <span className="mt-2 flex flex-row items-center justify-center md:mt-0">
                  <RoleBadge data={data} />
                  <StatusBadge data={data} />
                </span>
              </h2>
              <div className="flex w-full flex-col gap-4 rounded-xl border border-accent/20 p-4 lg:w-auto lg:flex-row lg:justify-self-end lg:border-none lg:p-0">
                <div className="relative">
                  <h3
                    className="relative flex flex-row items-center justify-center rounded-xl bg-white/10 p-3 text-center text-xl font-semibold lg:hidden"
                    onClick={(e) => {
                      setShowSection(!showSection);
                    }}
                  >
                    Ações
                    <span className="absolute right-4 top-1.5 text-3xl font-semibold">
                      {showSection ? "-" : "+"}
                    </span>
                  </h3>
                </div>
                <div
                  className={`flex flex-col gap-4 lg:flex-row ${
                    showSection ? "" : "hidden lg:flex"
                  }`}
                >
                  {data.user.deletedAt && (
                    <label htmlFor="restoreModal" className="btn-secondary btn lg:w-auto">
                      <span className="material-symbols-outlined symbols-filled">
                        restore_from_trash
                      </span>
                      Reativar Usuário
                    </label>
                  )}
                  {!edit && (
                    <button onClick={() => setEdit(true)} className={"btn-info btn lg:w-auto"}>
                      <span className="material-symbols-outlined symbols-filled">edit</span>
                      Editar
                    </button>
                  )}
                  <label htmlFor="deleteModal" className={"btn-error btn lg:w-auto"}>
                    <span className="material-symbols-outlined symbols-filled">delete</span>
                    Excluir
                  </label>
                </div>
              </div>
            </section>

            <UserInfoForm user={data.user} edit={edit} setEdit={setEdit} />
          </section>
        </section>
      ) : error ? (
        <div className="alert alert-error w-1/2 text-lg">
          <span className="material-symbols-outlined symbols-heavy text-2xl">error</span>
          {error.message}
        </div>
      ) : null}
      {id && (
        <>
          <DeleteUserModal id={id} />
          <RestoreUserModal id={id} />
        </>
      )} */}
    </div>
  );
};

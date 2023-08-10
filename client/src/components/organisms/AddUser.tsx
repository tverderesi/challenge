import { useFormControl } from "../../hooks/useFormControl";
import { TextInput } from "../atoms/TextInput";
import CustomCPFInput from "../atoms/CPFInput";
import { Select } from "../atoms/Select";
import { PasswordInput } from "../atoms/PasswordInput";
import { EmailInput } from "./EmailInput";
import { generateFakeData } from "../../utils/generateFakeData";
import { useState } from "react";
import roles from "../../assets/roles.json";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../graphql/mutations";
import { ReturnModal } from "../molecules/ReturnModal";
import { disappearingMessage } from "../../utils/disappearingMessage";
export function AddUser() {
  const [fakeData, setFakeData] = useState(null as any);
  const [errors, setErrors] = useState(null as any);
  const [success, setSuccess] = useState(null as any);

  const navigate = useNavigate();

  const initialState = {
    confirmPassword: null,
    cpf: "000.000.000-00",
    email: null,
    fullName: null,
    password: null,
    role: null,
    username: null,
  };

  const [register, { loading }] = useMutation(REGISTER, {
    onCompleted: async (data) => {
      setSuccess("Usuário cadastrado com sucesso!");

      setTimeout(() => {
        setSuccess(null);
        navigate("/lista-de-usuarios");
      }, 3000);
    },
    onError: (error) => {
      disappearingMessage(setErrors, error.message, 3000);
    },
  });

  const handleSubmit = () => {
    fakeData
      ? register({
          variables: {
            userInput: fakeData,
          },
        })
      : register({
          variables: {
            userInput: value,
          },
        });
  };

  const { onChange, onSubmit, value } = useFormControl(
    initialState,
    handleSubmit
  );

  const handleClick = async (e) => {
    e.preventDefault();
    setFakeData(generateFakeData());
  };

  return (
    <div className="w-screen">
      <ReturnModal
        loading={loading}
        success={success}
        error={errors}
        message="Criando Usuário..."
      />
      <form
        onSubmit={onSubmit}
        onReset={(e) => {
          e.preventDefault();
          setFakeData(false);
        }}
        className="w-full px-16"
      >
        <div className="absolute top-0 right-4">
          <label
            htmlFor="addUserModal"
            className="btn btn-sm btn-ghost btn-circle"
          >
            <span className="material-symbols-outlined order-1">close</span>
          </label>
        </div>
        <div className="flex flex-col">
          <h3 className="text-3xl flex items-center flex-row justify-center font-semibold my-8">
            <label className="material-symbols-outlined mr-2 text-3xl">
              add_circle
            </label>
            Novo Usuário
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-16">
            {fakeData ? (
              <>
                <div className="form-control">
                  <label
                    htmlFor="fullName"
                    className="label font-semibold text-base"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={fakeData.fullName}
                    disabled
                    className="input input-bordered"
                    autoComplete="off"
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="username"
                    className="label font-semibold text-base"
                  >
                    Nome de Usuário
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={fakeData.username}
                    disabled
                    className="input input-bordered"
                    autoComplete="off"
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="email"
                    className="label font-semibold text-base"
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={fakeData.email}
                    disabled
                    className="input input-bordered"
                    autoComplete="off"
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="cpf"
                    className="label font-semibold text-base"
                  >
                    CPF
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    value={fakeData.cpf}
                    disabled
                    className="input input-bordered"
                    autoComplete="off"
                  />
                </div>

                <div className="form-control">
                  <label
                    htmlFor="role"
                    className="label font-semibold text-base"
                  >
                    Tipo
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={roles[fakeData.role]}
                    disabled
                    className="input input-bordered"
                    autoComplete="off"
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="password"
                    className="label font-semibold text-base"
                  >
                    Senha
                  </label>
                  <input
                    type="text"
                    name="password"
                    value={fakeData.password}
                    disabled
                    className="input input-bordered"
                    autoComplete="off"
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="confirmPassword"
                    className="label font-semibold text-base"
                  >
                    Confirmar Senha
                  </label>
                  <input
                    type="text"
                    name="confirmPassword"
                    value={fakeData.confirmPassword}
                    disabled
                    className="input input-bordered"
                    autoComplete="off"
                  />
                </div>
              </>
            ) : (
              <>
                <TextInput
                  name="fullName"
                  onChange={onChange}
                  placeholder="Nome Completo"
                  label="Nome Completo"
                />
                <TextInput
                  name="username"
                  onChange={onChange}
                  placeholder="Nome de Usuário"
                  label="Nome de Usuário"
                />
                <EmailInput
                  name="email"
                  onChange={onChange}
                  placeholder="E-mail"
                />

                <CustomCPFInput
                  name={"cpf"}
                  onChange={onChange}
                  placeholder={"CPF"}
                  value={value.cpf}
                />

                <Select
                  options={roles}
                  name="role"
                  onChange={onChange}
                  label="Tipo"
                />
                <PasswordInput
                  name="password"
                  onChange={onChange}
                  placeholder="Senha"
                />
                <PasswordInput
                  name="confirmPassword"
                  onChange={onChange}
                  placeholder="Confirmar Senha"
                />
              </>
            )}
          </div>
          <div className="flex flex-row justify-between items-center gap-8 w-full mt-8">
            <button
              className="btn btn-sm join-item btn-warning"
              onClick={handleClick}
            >
              Gerar Usuário Falso
            </button>
            <div className="join divide-x border-info-content">
              <input
                type="submit"
                className="btn btn-sm btn-toolbar join-item btn-success"
                value="Criar Usuário"
              />
              <input
                type="reset"
                className="btn btn-sm btn-toolbar btn-info join-item  brightness-90"
                value="Limpar"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

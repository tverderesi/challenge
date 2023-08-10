import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useFormControl } from "../../hooks/useFormControl";
import { LOGIN_USER } from "../../graphql/mutations";
import { ILoginFormState } from "../../interfaces/ILoginFormState";
import { AppContext } from "../../context/AppContext";
import { verifyJWT } from "../../utils/verifyJWT";

export default function LoginForm() {
  const navigate = useNavigate();
  const { unauthorizedPathname, dispatch } = useContext(AppContext);

  verifyJWT() && navigate("/dashboard");

  //Verify if user is already logged in, if so, redirect to home page.

  const [errors, setErrors] = useState<any>(null);

  //Initial state for login form
  const initialState = {
    input: "",
    password: "",
  };

  //Handle submit function for login form
  async function handleSubmit() {
    await login();
  }

  // Custom hook for login form, returns onChange, onSubmit and value. It tracks the form state.
  const { onChange, onSubmit, value } = useFormControl<ILoginFormState>(
    initialState,
    handleSubmit
  );

  const [login, { loading }] = useMutation(LOGIN_USER, {
    update(
      _,
      {
        data: {
          login: { token },
        },
      }
    ) {
      navigate(unauthorizedPathname ? unauthorizedPathname : "/");
      dispatch({ type: "LOGIN", payload: token });
    },
    onError(err) {
      setErrors(err.message);
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    },
    variables: { loginInput: { ...value } },
  });

  return (
    <>
      {errors ? (
        <div className="w-[30rem] alert alert-error transition-all fixed bottom-10">
          <span className="material-symbols-outlined symbols-heavy">error</span>
          <span className=" font-semibold text-lg">{errors}</span>
        </div>
      ) : null}
      <div className="w-screen h-screen flex flex-col items-center justify-center md:h-auto md:card md:w-96 bg-base-200 shadow-xl transition-all ">
        <div
          className={`flex flex-col items-center justify-center card-body relative ${
            errors ? "shake-horizontal" : ""
          }`}
        >
          <h2 className="card-title text-3xl mb-10">QTeorico</h2>
          {loading ? (
            <div className="w-full h-full absolute flex flex-col items-center top-0 left-0 gap-16 justify-center bg-base-200/90 backdrop-blur rounded-box">
              <span className="loading loading-ring w-16"></span>
              <span className="text-3xl font-semibold">Entrando...</span>
            </div>
          ) : null}
          <form
            className="form-control w-full max-w-xs gap-5"
            onSubmit={onSubmit}
          >
            <input
              name="input"
              type="text"
              placeholder="Usuário ou Email"
              className="input input-bordered w-full max-w-xs"
              aria-label="Usuário"
              onChange={onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Senha"
              className="input input-bordered w-full max-w-xs"
              aria-label="Senha"
              onChange={onChange}
            />
            <input
              type="submit"
              value="Entrar"
              className="btn btn-primary"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

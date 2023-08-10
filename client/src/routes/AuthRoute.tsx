import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { verifyJWT } from "../utils/verifyJWT";
export function AuthRoute(): JSX.Element {
  const { dispatch } = useContext(AppContext);
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch({
      type: "SET_PATHNAME",
      payload: pathname !== "/login" ? pathname : "/",
    });
  }, []);
  return verifyJWT() ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthRoute;

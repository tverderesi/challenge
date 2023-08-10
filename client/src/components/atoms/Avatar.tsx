import { useGetInitials } from "../../hooks/useGetInitials";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
export const Avatar = () => {
  const { fullName, dispatch } = useContext(AppContext);
  const initials = useGetInitials(fullName);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn border-0 btn-circle btn-neutral">
        {initials}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1]  shadow  bg-base-100/90
         backdrop-blur-lg rounded-box w-64 mt-4 divide-y divide-base-content/10 font-medium"
      >
        <li className="text-lg  p-3 pl-5">Olá, {fullName}!</li>
        <li className="p-1.5">
          <Link to="/profile">Editar Perfil</Link>
        </li>
        <li className="p-1.5">
          <span onClick={handleLogout}>Sair</span>
        </li>
      </ul>
    </div>
  );
};

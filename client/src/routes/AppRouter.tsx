import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/templates/Layout";
import { Login } from "../pages/Login";
import { AuthRoute } from "./AuthRoute";
import { NotFound } from "../pages/NotFound";
import { Users } from "../pages/Users";
import { User } from "../pages/User";
import { AddUser } from "../components/organisms/AddUser";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthRoute />}>
            <Route path="/" element={<Navigate to="/lista-de-usuarios" />} />
            <Route path="/novo-usuario" element={<AddUser />} />
            <Route path="/lista-de-usuarios" element={<Users />} />
            <Route path="/usuario/:id" element={<User />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/templates/Layout";
import { Login } from "../pages/Login";
import { AuthRoute } from "./AuthRoute";
import { Home } from "../pages/Home";
import { Candidates } from "../pages/Candidates";
import { NotFound } from "../pages/NotFound";
import { Users } from "../pages/Users";
import { PageHeader } from "../components/atoms/PageHeader";
import { User } from "../pages/User";
import { AddUser } from "../components/organisms/AddUser";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/novo-usuario" element={<AddUser />} />
            <Route path="/lista-de-usuarios" element={<Users />} />
            <Route path="/lista-de-candidatos" element={<Candidates />} />
            <Route path="/exames-teoricos" element={<>OI</>} />
            <Route path="/banco-de-questoes" element={<PageHeader />} />
            <Route path="/usuario/:id" element={<User />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

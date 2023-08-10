import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Navbar from "../molecules/Navbar";
import { Outlet } from "react-router-dom";
import { ILinkWithIcon } from "../../interfaces/ILinkWithIcon";
import links from "../../assets/links.json";
import { verifyJWT } from "../../utils/verifyJWT";
export default function Layout() {
  const { role } = useContext(AppContext);
  const valid = verifyJWT();
  const linkList: ILinkWithIcon[] =
    role === "ADMIN"
      ? links.ADMIN
      : role === "INSTRUCTOR"
      ? links.INSTRUCTOR
      : links.USER;

  return (
    <div className="min-h-screen w-screen bg-base-100 overflow-y-hidden">
      {valid && <Navbar links={linkList} />}
      <main
        className={`h-full ${
          valid ? "pt-20 lg:pt-24" : ""
        }  flex flex-col items-center justify-start min-h-screen w-screen  bg-primary/[3%]`}
      >
        <Outlet />
      </main>
    </div>
  );
}

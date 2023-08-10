import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import links from "../../assets/links.json";
import slugify from "slugify";

export function PageHeader({ loading = false }: { loading?: boolean }) {
  const { role } = useContext(AppContext);
  const location = useLocation();

  const activeLink = links[role].filter(
    (link) =>
      slugify(link.name, { lower: true }) === location.pathname.split("/")[1]
  )[0];
  return (
    <h1 className="bg-accent/20 lg:bg-transparent w-screen lg:w-auto text-4xl font-semibold p-4 text-center lg:text-left flex flex-row items-center ">
      <span className="material-symbols-outlined text-4xl mr-3">
        {activeLink.icon}
      </span>
      {activeLink.name}
      {loading ? (
        <span className="loading loading-spinner loading-lg ml-4" />
      ) : null}
    </h1>
  );
}

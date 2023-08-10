import { Link, useLocation } from "react-router-dom";
import slugify from "slugify";
import { ILinkWithIcon } from "../../interfaces/ILinkWithIcon";

export function SingleMenuItem(link: ILinkWithIcon) {
  const slug = slugify(link.name, { lower: true });

  const { pathname } = useLocation();

  return (
    <Link
      to={slug}
      className={`py-3 ${
        slug === pathname.split("/")[1] ? "bg-neutral-focus" : ""
      }`}
    >
      <span className="material-symbols-outlined">{link.icon}</span>
      {link.name}
    </Link>
  );
}

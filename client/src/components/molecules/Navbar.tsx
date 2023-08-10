import { Link } from "react-router-dom";
import { Avatar } from "../atoms/Avatar";
import slugify from "slugify";
import { SingleMenuItem } from "../atoms/SingleMenuItem";
import { IDropdownLink } from "../../interfaces/IDropdownLink";
import { ILinkWithIcon } from "../../interfaces/ILinkWithIcon";

export default function Navbar({
  links,
}: {
  links: (IDropdownLink | ILinkWithIcon)[];
}) {
  return (
    <div className="navbar bg-base-300 h-20 fixed z-10 lg:shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <span className="material-symbols-outlined">menu</span>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-300/75 backdrop-blur rounded-box w-60 gap-y-3 text-lg font-semibold"
          >
            {links.map((link, index) => {
              if ("name" in link && "icon" in link) {
                return (
                  <li key={index}>
                    <SingleMenuItem {...link} />
                  </li>
                );
              }
              if ("parent" in link && "items" in link) {
                const typedLink = link as IDropdownLink;
                return (
                  <li key={index}>
                    {typedLink.parent}
                    <ul className="p-2">
                      {typedLink.items.map((item2, index2) => (
                        <li key={index + "." + index2}>
                          <SingleMenuItem {...item2} />
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              const typedLink = link as ILinkWithIcon;
              return (
                <li key={index} className="font-semibold">
                  <Link to={slugify(typedLink.name, { lower: true })}>
                    {typedLink.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl normal-case">
          QTeorico
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-base gap-x-3">
          {links.map((link, index) => {
            let tabIndex = 0;
            if ("name" in link && "icon" in link) {
              return (
                <li key={index}>
                  <SingleMenuItem {...link} />
                </li>
              );
            }

            if ("parent" in link && "items" in link) {
              const typedLink = link as IDropdownLink;
              tabIndex++;
              return (
                <li key={index} tabIndex={tabIndex - 1}>
                  <details>
                    <summary className="active:bg-transparent">
                      {typedLink.parent}
                    </summary>
                    <ul className="p-2">
                      {typedLink.items.map((item, index2) => (
                        <li key={index + "." + index2}>
                          <SingleMenuItem {...item} />
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              );
            }

            return (
              <li
                key={index}
                tabIndex={tabIndex - 1}
                className="btn btn-active"
              >
                <SingleMenuItem {...link} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <Avatar />
      </div>
    </div>
  );
}

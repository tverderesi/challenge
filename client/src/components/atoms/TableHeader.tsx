import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
export const TableHeader = ({ header: { id, name }, ...props }) => {
  const { filters, refetch, dispatch } = useContext(AppContext);

  const handleClick = async (id, order) => {
    const newOrder =
      id === filters.sortField ? (order === "ASC" ? "DESC" : "ASC") : "ASC";

    dispatch({ type: "SET_SORT", payload: { sortField: id, order: newOrder } });
    dispatch({
      type: "SET_USER_FILTERS",
      payload: { sortField: id, order: newOrder },
    });
  };

  const getArrowRotation = (sortField, id, order) => {
    if (sortField === id) {
      return order === "ASC" ? "-rotate-90" : "rotate-90";
    } else {
      return "rotate-0";
    }
  };
  return (
    <div
      className="flex flex-row items-center gap-3 cursor-pointer text-base"
      {...props}
      onClick={(e) => {
        handleClick(id, filters.order);
      }}
    >
      <span className="capitalize">{name}</span>
      <span
        className={`material-symbols-outlined symbols-heavy  ${getArrowRotation(
          filters.sortField,
          id,
          filters.order
        )} transition-transform duration-300 ease-in-out`}
      >
        keyboard_arrow_right
      </span>
    </div>
  );
};

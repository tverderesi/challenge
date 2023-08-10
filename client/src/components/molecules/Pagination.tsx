import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Pagination({ onChange }: { onChange: any }) {
  const { userCount, filters } = useContext(AppContext);

  const pages = Math.ceil(userCount / parseInt(filters.limit));

  const intArray: Number[] = [];
  for (let i = 1; i <= pages; i++) {
    intArray.push(i);
  }

  return (
    <div
      className={`flex flex-row items-center justify-between gap-5  border border-accent-content/20 rounded-xl p-4 px-8`}
    >
      <h3 className="text-3xl font-semibold basis-1/3">Páginas</h3>
      <div className="join">
        {intArray.map((item) => (
          <input
            className={`join-item btn btn-square ${
              intArray.length === 1 ? "rounded-lg" : ""
            }`}
            key={String(item)}
            name="page"
            type="radio"
            checked={filters.page === item.toString()}
            value={item.toString()}
            aria-label={item.toString()}
            onChange={onChange}
          />
        ))}
      </div>
      <div className="text-3xl font-semibold basis-1/3 text-right">
        {userCount} Resultados
      </div>
    </div>
  );
}

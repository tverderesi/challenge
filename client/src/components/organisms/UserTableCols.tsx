import { Link } from "react-router-dom";
import { maskFunctions } from "../../utils/maskFunctions";

// Component to render table columns dynamically based on data
export function UserTableCols({ tableRow, headers }) {
  return (
    <>
      {headers.map(({ id, type, mask, success, boolFalse, boolTrue }) => {
        return type === "date" ? (
          <FormatedDateCol key={id} date={tableRow[id]} />
        ) : type === "bool" ? (
          <FormatedBoolCol
            key={id}
            success={success}
            value={tableRow[id]}
            boolFalse={boolFalse}
            boolTrue={boolTrue}
          />
        ) : type === "mask" ? (
          <MaskedCol key={id} rawValue={tableRow[id]} mask={mask} />
        ) : (
          <BasicCol key={id} value={tableRow[id]} />
        );
      })}
    </>
  );
}

// Component for rendering a button with a link
export function ViewSingleEntryButton({
  id,
  type,
  dataTip,
  icon,
}: {
  id: any;
  type: string;
  dataTip: string;
  icon: string;
}) {
  const portugueseType = { user: "usuario" };
  return (
    <div
      className="tooltip tooltip-info tooltip-right font-semibold"
      data-tip={dataTip}
    >
      <button className="btn btn-ghost btn-square mx-auto hover:bg-info hover:text-info-content">
        <Link to={`/${portugueseType[type]}/${id}`}>
          <span className="material-symbols-outlined symbols-filled text-4xl">
            {icon}
          </span>
        </Link>
      </button>
    </div>
  );
}

// Component for formatting date column
const FormatedDateCol = ({ date }) => {
  const formatedDate = new Date(Number(date)).toLocaleDateString();
  return <td>{formatedDate}</td>;
};

// Component for formatting boolean column
const FormatedBoolCol = ({ success, value, boolTrue = "", boolFalse = "" }) => {
  return (
    <td
      className={`font-black ${
        success === value ? "text-success" : "text-error"
      }`}
    >
      {boolTrue && boolFalse
        ? success === value
          ? boolTrue
          : boolFalse
        : value}
    </td>
  );
};

// Component for basic column
const BasicCol = ({ value }) => <td>{value}</td>;

// Component for masked column
const MaskedCol = ({ rawValue, mask }) => {
  const maskFunction = maskFunctions[mask];

  return <td>{maskFunction(rawValue)}</td>;
};

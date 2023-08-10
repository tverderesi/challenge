import { TableHeader } from "../atoms/TableHeader";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { UserTableRows } from "./UserTableRows";
export function Table({ headers, type }) {
  const { data } = useContext(AppContext);
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    data[type] ? setTableData(data[type]) : setTableData([]);
  }, [data]);

  return (
    <div className="overflow-x-scroll lg:w-auto h-auto shadow-lg  lg:rounded-xl border-0 lg:border border-black ">
      {tableData.length > 0 ? (
        <table className="table table-zebra border border-base-300 shadow-lg rounded-xl border-none">
          <thead>
            <tr className="text-lg text-base-content bg-accent/20 ">
              <th></th>
              {headers.map((header, idx) => (
                <th key={idx}>
                  <TableHeader header={header} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <UserTableRows tableData={tableData} headers={headers} />
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning text-xl font-medium shadow-lg">
          <span className="material-symbols-outlined symbols-heavy text-2xl">
            warning
          </span>
          <span>Nenhum resultado encontrado.</span>
        </div>
      )}
    </div>
  );
}

import { ViewSingleEntryButton, UserTableCols } from "./UserTableCols";

export function UserTableRows({ tableData, headers }) {
  return (
    <>
      {tableData.map((tableRow, idx) => {
        return (
          <tr className="text-base" key={idx}>
            <td className="w-auto pl-2 pr-0">
              <ViewSingleEntryButton
                id={tableRow.id}
                dataTip="ver usuário"
                type="user"
                icon="account_circle"
              />
            </td>
            <UserTableCols tableRow={tableRow} headers={headers} />
          </tr>
        );
      })}
    </>
  );
}

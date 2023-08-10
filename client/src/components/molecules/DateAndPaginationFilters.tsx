import { useState } from "react";
import { Select } from "../atoms/Select";
import { DateInput } from "../atoms/DateInput";

export function DateAndPaginationFilters({ onChange }: { onChange: any }) {
  const [showSection, setShowSection] = useState(false);
  return (
    <div
      className={`border border-accent-content/20 rounded-xl my-2 p-2  ${
        showSection ? "hover:bg-white/10" : "hover:bg-transparent"
      }`}
    >
      <div
        className={`w-full text-xl font-semibold text-primary-content pt-2 pb-3 px-3  rounded-xl cursor-pointer  ${
          !showSection ? "hover:bg-white/10" : "hover:bg-transparent"
        } transition-all`}
        onClick={(e) => setShowSection(!showSection)}
      >
        <h2 className="relative w-full flex flex-row items-center">
          <span className="material-symbols-outlined  mr-2">
            calendar_month
          </span>
          Campos de Data e Paginação
          <span className="absolute right-2">{showSection ? "+" : "-"}</span>
        </h2>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 flex-wrap items-center justify-start gap-5 form-control px-2 ${
          showSection ? "hidden" : "false"
        } pb-2`}
      >
        <Select
          name="dateField"
          label="Tipo de Data"
          onChange={onChange}
          options={{ createdAt: "Criado em", updatedAt: "Atualizado em" }}
        />
        <DateInput
          name={"startDate"}
          placeholder={"Data Inicial"}
          onChange={onChange}
        />
        <DateInput
          name={"endDate"}
          placeholder={"Data Final"}
          onChange={onChange}
        />
        <Select
          name="limit"
          label="Resultados por Página"
          onChange={(e) => {
            onChange(e);
          }}
          options={{ "10": 10, "25": 25, "50": 50, "100": 100 }}
          defaultValue={25}
        />
      </div>
    </div>
  );
}

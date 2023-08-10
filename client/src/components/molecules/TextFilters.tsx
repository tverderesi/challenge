import CustomCPFInput from "../atoms/CPFInput";
import { IUserFilterState } from "../../interfaces/IUserFilterState";
import { useState } from "react";
import { TextInput } from "../atoms/TextInput";
import { Select } from "../atoms/Select";
import userStatus from "../../assets/userStatus.json";
import roles from "../../assets/roles.json";

export function TextFilters({
  onChange,
  value,
}: {
  onChange: any;
  value: IUserFilterState;
}) {
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
        <h2 className="relative w-full flex flex-row items-center text-accent-content">
          <span className="material-symbols-outlined mr-2">glyphs</span>
          Campos de Texto
          <span className="absolute right-2">{showSection ? "+" : "-"}</span>
        </h2>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 flex-wrap items-center justify-start gap-5 form-control px-2 ${
          showSection ? "hidden" : "false"
        } pb-2`}
      >
        <TextInput
          placeholder="Nome"
          name="fullName"
          onChange={onChange}
          label="Nome"
        />
        <TextInput
          placeholder="Usuário"
          name="username"
          onChange={onChange}
          label="Usuário"
        />
        <TextInput
          placeholder="Email"
          name="email"
          onChange={onChange}
          label="Email"
        />

        <CustomCPFInput
          name="cpf"
          value={value.cpf}
          placeholder="CPF"
          onChange={onChange}
        />
        <Select
          options={userStatus}
          name="userStatus"
          onChange={onChange}
          label="Status"
        />
        <Select options={roles} name="role" onChange={onChange} label="Tipo" />
      </div>
    </div>
  );
}

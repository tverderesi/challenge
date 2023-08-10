/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";

import { TitleWithIcon } from "../atoms/TitleWithIcon";
import { TextFilters } from "../molecules/TextFilters";
import { DateAndPaginationFilters } from "../molecules/DateAndPaginationFilters";
import { ReturnModal } from "../molecules/ReturnModal";
import { Pagination } from "../molecules/Pagination";

export const UserFilters = ({ error, onSubmit, onReset, onChange, value }) => {
  return (
    <>
      <div className="p-0 m-0 lg:card lg:my-4 w-screen lg:w-auto   bg-accent/20 shadow-lg border-0 lg:border border-black">
        <ReturnModal error={error} message="Carregando Usuários..." />
        <form className="card-body" onSubmit={onSubmit} onReset={onReset}>
          <div className="flex flex-row justify-between">
            <TitleWithIcon name="Filtros" icon="filter_alt" />
            <div className=" join divide-x- border-info-content">
              <Link
                to={"/novo-usuario"}
                className="btn btn-sm btn-success join-item"
              >
                <label className="material-symbols-outlined">add</label>
                Novo Usuário
              </Link>
              <input
                type="reset"
                className="btn btn-sm btn-toolbar btn-info join-item  brightness-90"
                value="Limpar Filtros"
              />
            </div>
          </div>

          <TextFilters onChange={onChange} value={value} />
          <DateAndPaginationFilters onChange={onChange} />
          <Pagination onChange={onChange} />
        </form>
      </div>
    </>
  );
};

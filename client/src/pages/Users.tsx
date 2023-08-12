//@ts-ignore
import { useContext, useEffect, useState } from "react";
import { UserFilters } from "../components/organisms/UserFilters";
import { PageHeader } from "../components/atoms/PageHeader";
import { Table } from "../components/organisms/Table";
import { AppContext } from "../context/AppContext";
import userHeaders from "../assets/userHeaders.json";
import { Maybe } from "../interfaces/TMaybe";
import { IUserFilterState } from "../interfaces/IUserFilterState";
import { useQuery } from "@apollo/client";
import { queriesCountUsersQuery, queriesGetUsersQuery } from "../graphql/queries";
import { useFormControl } from "../hooks/useFormControl";
import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro"; // Use this import

export const Users = () => {
  const AGetUserQuery = graphql`
    query AUsersQuery {
      users(queryUser: {}) {
        id
        username
        email
        fullName
        cpf
        role
        createdAt
        updatedAt
        deletedAt
      }
    }
  `;
  const { dispatch, filters } = useContext(AppContext);

  const [error, setErrors] = useState<Maybe<String>>(null);

  const initialState: IUserFilterState = {
    page: "1",
    limit: "25",
    sortField: "createdAt",
    order: "DESC",
  };
  const data: any = useLazyLoadQuery(AGetUserQuery, {});
  dispatch({ type: "SET_USER_DATA", payload: data.users });
  const { onChange, onReset, onSubmit, value } = useFormControl(initialState, () => {});

  useEffect(() => {
    dispatch({ type: "SET_USER_FILTERS", payload: value });
  }, [value]);

  // const { loading } = useQuery(queriesGetUsersQuery, {
  //   variables: {
  //     queryUser: { ...filters },
  //   },
  //   onCompleted: async (data) => {

  //   },
  //   onError: (error) => {
  //     setErrors(error.message);
  //   },
  // });

  // useQuery(queriesCountUsersQuery, {
  //   variables: {
  //     queryUser: { ...value },
  //   },
  //   onCompleted: async (data) => {
  //     dispatch({ type: "SET_USER_COUNT", payload: data.userCount });
  //   },
  //   onError: (error) => {
  //     setErrors(error.message);
  //   },
  // });

  return (
    <div className="w-screen pb-0 lg:w-[95vw] lg:pb-10">
      {/* <PageHeader loading={loading} />
      <UserFilters
        error={error}
        onChange={onChange}
        onReset={onReset}
        onSubmit={onSubmit}
        value={value}
      />

      <Table headers={userHeaders} type="users" /> */}
    </div>
  );
};

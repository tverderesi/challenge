import { graphql } from "react-relay";

export const queriesGetUsersQuery = graphql`
  query queriesGetUsersQuery($queryUser: QueryUser) {
    users(queryUser: $queryUser) {
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

export const queriesGetUserQuery = graphql`
  query queriesGetUserQuery($userId: ID!) {
    user(id: $userId) {
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

export const queriesCountUsersQuery = graphql`
  query queriesCountUsersQuery($queryUser: QueryUser) {
    userCount(queryUser: $queryUser)
  }
`;

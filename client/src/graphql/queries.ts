import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users($queryUser: QueryUser) {
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

export const GET_USER = gql`
  query User($userId: ID!) {
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

export const COUNT_USERS = gql`
  query Query($queryUser: QueryUser) {
    userCount(queryUser: $queryUser)
  }
`;

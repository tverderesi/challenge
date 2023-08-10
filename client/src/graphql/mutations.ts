import { gql } from "@apollo/client";
export const LOGIN_USER = gql`
  mutation Login($loginInput: UserLoginInput) {
    login(loginInput: $loginInput) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation Register($userInput: UserInput) {
    register(userInput: $userInput) {
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Register($userInput: UserUpdateInput) {
    updateUser(userInput: $userInput)
  }
`;

export const SOFT_DELETE_USER = gql`
  mutation SoftDeleteUser($id: ID!) {
    softDeleteUser(_id: $id)
  }
`;

export const HARD_DELETE_USER = gql`
  mutation SoftDeleteUser($id: ID!) {
    hardDeleteUser(_id: $id)
  }
`;

export const RESTORE_USER = gql`
  mutation restoreUser($id: ID!) {
    restoreUser(_id: $id)
  }
`;

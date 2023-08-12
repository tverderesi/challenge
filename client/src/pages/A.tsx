import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro"; // Use this import

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

const Users = () => {
  const data: any = useLazyLoadQuery(AGetUserQuery, {});
  console.log(data.users);
  // You can access the data here

  return <div>{/* Render your component */}</div>;
};

export default Users;

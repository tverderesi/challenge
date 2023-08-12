import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro"; // Use this import

const AGetUserQuery = graphql`
  query AUsersQuery {
    users {
      id
      username
      email
    }
  }
`;

const Users = () => {
  const data = useLazyLoadQuery(AGetUserQuery, {});
  console.log(data);
  // You can access the data here

  return <div>{/* Render your component */}</div>;
};

export default Users;

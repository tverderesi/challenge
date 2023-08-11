import { userResolver } from "./userResolver";

const resolvers = {
  Query: { ...userResolver.Query },
  Mutation: { ...userResolver.Mutation },
};

export default resolvers;

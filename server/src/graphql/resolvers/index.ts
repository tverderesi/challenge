import { userResolver } from "./userResolver.js";

const resolvers = {
  Query: { ...userResolver.Query },
  Mutation: { ...userResolver.Mutation },
};

export default resolvers;

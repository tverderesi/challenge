import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers/index";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const startServer = async () => {
  if (!process.env.MONGODB_URI) {
    console.error("Missing MONGODB_URI environment variable.");
    process.exit(1);
  }
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB", error);
    });

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use("/graphql", cors<cors.CorsRequest>(), bodyParser.json(), expressMiddleware(server));
};

startServer();

app.listen(4000, () => {
  console.log("Server started.");
});

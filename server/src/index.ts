import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/written_exams")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

app.use(
  "/graphql",
  cors<cors.corsRequest>(),
  bodyParser.json(),
  expressMiddleware(server)
);
app.listen(4000, () => {
  console.log("Server started.");
});

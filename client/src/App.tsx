import { AppContextProvider } from "./context/AppContext";
import AppRouter from "./routes/AppRouter";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </ApolloProvider>
  );
}

export default App;

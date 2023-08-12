import { AppContextProvider } from "./context/AppContext";
import Users from "./pages/A";
import AppRouter from "./routes/AppRouter";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Users />
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </ApolloProvider>
  );
}

export default App;

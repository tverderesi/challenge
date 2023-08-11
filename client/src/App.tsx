import { AppContextProvider } from "./context/AppContext";
import AppRouter from "./routes/AppRouter";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
console.log(process.env);
export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
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

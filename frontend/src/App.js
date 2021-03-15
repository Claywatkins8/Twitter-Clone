import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./config/routes";

import "./App.css";
const client = new ApolloClient({
  uri: "http://localhost:4025",
  headers: {
    authorization: localStorage.uid || "",
    // authorization: localStorage.getItem("uid") || "",
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allTweets: {
            keyArgs: ["type"],
            merge(existing = [], incoming = []) {
              return [...existing, ...incoming];
            },

            // While args.cursor may still be important for requesting
            // a given page, it no longer has any role to play in the
            // merge function.
            // merge(existing, incoming, { readField }) {
            //   const merged = { ...existing };
            //   incoming.forEach((item) => {
            //     merged[readField("id", item)] = item;
            //   });
            //   return merged;
            // },

            // // Return all items stored so far, to avoid ambiguities
            // // about the order of the items.
            // read(existing) {
            //   return existing && Object.values(existing);
            // },
          },
        },
      },
    },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;

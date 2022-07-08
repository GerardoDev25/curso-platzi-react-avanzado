import React from "react";
import reactDom from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./App";

const client = new ApolloClient({
  uri: "https://petgram-server-gerardo-miranda.vercel.app/graphql",
});

reactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("app")
);

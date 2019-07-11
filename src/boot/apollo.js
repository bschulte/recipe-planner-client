import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { onError } from "apollo-link-error";
import { getToken, logout } from "../services/auth.service";
import Router from "../router";

// HTTP connection to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5112/graphql"
      : ""
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      // Check if the user was denied access. If so, log the user out. This is to
      // handle the case of an expired JWT
      if (message.includes("Access denied")) {
        logout();
        Router.push("/login");
      }
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default async ({ app, Vue }) => {
  Vue.use(VueApollo);

  app.apolloProvider = apolloProvider;
};

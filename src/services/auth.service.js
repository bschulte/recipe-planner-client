import axios from "axios";
import { LOGIN } from "../graphql/mutations";
import { GET_USER } from "../graphql/queries";
import { apolloClient } from "../boot/apollo";
import store from "../store";
import { SET_LOGGED_IN, SET_USER_INFO } from "../store/user/constants";

const TOKEN = "token";

export const isLoggedIn = async () => {
  try {
    // Specify to only request over the network, not the cache
    // so we can properly verify if the stored JWT is still valid or not
    const { data } = await apolloClient.query({
      query: GET_USER,
      fetchPolicy: "network-only"
    });

    if (data.user) {
      // store.dispatch(loginAction());
      return true;
    }

    return false;
  } catch (err) {
    console.log("User not logged in");
    return false;
  }
};

export const getToken = () => localStorage.getItem(TOKEN) || "";

export const setToken = token => {
  localStorage.setItem(TOKEN, token);
  // Set the default axios token as well
  axios.defaults.headers.common.Authorization = token;
};

export const login = async (email, password) => {
  console.log("Attempting to log user in");
  const { data } = await apolloClient.mutate({
    mutation: LOGIN,
    variables: { userData: { email, password } }
  });

  if (data && data.login) {
    console.log("Logged in successfully:", data.login);
    setToken(data.login);

    // Perform the query to get the user since we've just logged in
    // and need to populate that data
    const response = await apolloClient.query({ query: GET_USER });

    store.commit({
      type: SET_LOGGED_IN,
      isLoggedIn: true
    });
    store.commit({
      type: SET_USER_INFO,
      userInfo: response.data.user
    });

    return true;
  }

  console.log("Login failed");
  return false;
};

export const logout = async () => {
  console.log("Logging user out");
  localStorage.removeItem(TOKEN);

  // store.dispatch(logoutAction());
  apolloClient.resetStore();
};

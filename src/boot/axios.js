import axios from "axios";
import { Notify } from "quasar";
import { logout } from "../services/auth.service";
import Router from "../router";

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;

  // Set the axios interceptor to check and see if we got a 401 error
  // If so, we'll auto-logout
  axios.interceptors.response.use(
    response => response,
    err => {
      console.log("Axios intercepted err:", err);
      // Check for 401 (unauthorized error), ignore responses from
      // attempts to login, since that is handled separately inside
      // the login component
      if (err.response.status === 401) {
        console.log("Unauthorized error received, logging out...");
        logout();

        Notify.create({ message: "Session is expired", position: "top-right" });
        Router.push("/login");
      }

      return err.response;
    }
  );
};

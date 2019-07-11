<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated class="bg-white text-grey-8 header">
      <q-toolbar>
        <q-toolbar-title class="flex items-center">
          Recipe Planner
        </q-toolbar-title>

        <q-tabs>
          <q-route-tab name="tab1" to="/">Recipes</q-route-tab>
          <q-route-tab name="tab2" to="/create-recipe">Add Recipe</q-route-tab>
        </q-tabs>
        <user-menu-dropdown :user="user" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script>
import UserMenuDropdown from "./components/UserMenuDropdown.vue";
import Footer from "./components/Footer.vue";
import store from "../store";

import { GET_USER } from "../graphql/queries";
import { SET_USER_INFO } from "../store/user/constants";

export default {
  components: {
    Footer,
    UserMenuDropdown
  },

  apollo: {
    user: {
      query: GET_USER,
      fetchPolicy: "network-only",
      result(result) {
        store.commit({
          type: SET_USER_INFO,
          userInfo: result.data.user
        });
      }
    }
  },

  data() {
    return {
      getUser: GET_USER,
      leftDrawerOpen: true,
      rightDrawerOpen: false
    };
  }
};
</script>

<style scoped lang="stylus">
@import '~quasar-variables';

.header {
  border-top: 3px solid $primary;
}

.company-logo {
  margin-right: 65px;
}
</style>

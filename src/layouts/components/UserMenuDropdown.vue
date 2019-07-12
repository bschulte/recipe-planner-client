<template>
  <div>
    <q-circular-progress v-if="!user" indeterminate />
    <q-btn-dropdown
      v-else
      stretch
      flat
      :label="user.email"
      class="user-dropdown"
    >
      <q-list>
        <q-item-label header class="list-header">account</q-item-label>

        <q-item clickable @click="logout">
          <q-item-section avatar>
            <q-icon name="fal fa-sign-out" />
          </q-item-section>
          <q-item-section>
            <span>Logout</span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>


<script>
import { logout } from "../../services/auth.service";

export default {
  name: "UserMenuDropdown",
  props: {
    user: Object
  },
  methods: {
    logout() {
      logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="stylus" scoped>
.list-header {
  background-color: $grey-4;
  text-transform: uppercase;
  color: $grey-7;
  text-align: center;
}
</style>

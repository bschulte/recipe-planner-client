<template>
  <div v-if="!users">Loading...</div>
  <div v-else class="root">
    <q-select
      label="Select User"
      dense
      options-dense
      v-model="selectedUser"
      :options="options"
      @input="$emit('select', userSelected)"
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
          <q-item-section avatar class="flex flex-center">
            <q-icon name="fal fa-user" />
          </q-item-section>
          <q-item-section>
            <q-item-label v-html="scope.opt.label" />
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
import { ADMIN_GET_USERS } from "../../graphql/queries";

export default {
  name: "UserSelect",

  data() {
    return {
      selectedUser: null,
      users: []
    };
  },

  computed: {
    options() {
      return this.users.map(user => ({
        label: user.email,
        value: user.email
      }));
    }
  },

  apollo: {
    users: {
      query: ADMIN_GET_USERS,
      fetchPolicy: "network-only"
    }
  }
};
</script>

<style lang="stylus" scoped>
.root {
  min-width: 150px;
}
</style>

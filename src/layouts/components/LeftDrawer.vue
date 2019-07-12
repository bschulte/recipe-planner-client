<template>
  <q-drawer
    v-model="open"
    side="left"
    elevated
    show-if-above
    content-class="bg-grey-8"
    :width="240"
  >
    <!-- drawer content -->
    <q-scroll-area class="fit">
      <q-list dark>
        <q-item
          clickable
          v-for="route of sidebarRoutes"
          :key="route.path"
          class="menu-item"
          :exact="route.path === ''"
          :to="`/${route.path}`"
          active-class="active-menu-item"
          @click="navigate(route.path)"
        >
          <q-item-section avatar>
            <q-icon :name="route.icon" />
          </q-item-section>

          <q-item-section>{{ route.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import routes from "../../router/routes";

export default {
  name: "LeftDrawer",

  props: {
    open: Boolean
  },

  computed: {
    user() {
      return this.$store.state.user;
    },

    sidebarRoutes() {
      let routesToShow = routes.find(route => route.path === "/").children;

      // Conditionally displayed routes. We filter out any routes that shouldn't
      // be shown.
      if (!this.user.userInfo || !this.user.userInfo.access.isAdmin) {
        routesToShow = routesToShow.filter(route => route.path !== "admin");
      }

      return routesToShow;
    }
  },

  methods: {
    navigate(path) {
      console.log("Navigating to path: ", path);
      this.$router.push(path);
    }
  }
};
</script>

<style lang="stylus" scoped>
.menu-item {
  height: 60px;
  color: #fff;
  transition: background-color 0.3s ease;
}

.active-menu-item {
  background-color: $grey-7;

  i {
    color: $blue-4 !important;
  }
}
</style>

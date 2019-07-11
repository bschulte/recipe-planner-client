<template>
  <q-layout view="hHh lpR fFf" class="flex flex-center">
    <q-page-container>
      <transition
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="aniamted slideOutDown"
      >
        <login/>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import Login from "../pages/Login.vue";

export default {
  name: "LoginLayout",
  components: {
    Login
  }
};
</script>

<style lang="stylus" scoped>
.login-card {
  width: 350px;
}
</style>

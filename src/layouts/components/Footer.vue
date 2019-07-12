<template>
  <q-footer class="footer text-grey-8" bordered>
    <q-toolbar class="q-pb-md">
      <a class="q-mr-xs company-link" href="#">Company</a>
      © 2019 Company
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="stylus">
.footer {
  margin-left: 5px;
  height: 40px;
  background-color: $body-bg;
}

.company-link {
  color: $blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>

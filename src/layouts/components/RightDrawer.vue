<template>
  <q-drawer v-model="open" side="right" behavior="desktop" elevated overlay class="right-drawer">
    <!-- drawer content -->
  </q-drawer>
</template>

<script>
export default {
  name: "RightDrawer",
  props: {
    open: Boolean
  }
};
</script>

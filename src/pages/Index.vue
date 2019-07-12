<template>
  <q-page padding>
    <recipe-list-table />
  </q-page>
</template>

<style></style>

<script>
import RecipeListTable from "../components/Index/RecipeListTable.vue";

export default {
  name: "Index",
  components: {
    RecipeListTable
  }
};
</script>

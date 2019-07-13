<template>
  <q-page padding>
    <row class="q-gutter-md">
      <div class="col">
        <recipe-list-table />
      </div>

      <div class="col">
        <recipes-for-the-week />
      </div>
    </row>
  </q-page>
</template>

<style></style>

<script>
import RecipeListTable from "../components/Index/RecipeListTable.vue";
import RecipesForTheWeek from "../components/Index/RecipesForTheWeek.vue";

export default {
  name: "Index",
  components: {
    RecipeListTable,
    RecipesForTheWeek
  }
};
</script>

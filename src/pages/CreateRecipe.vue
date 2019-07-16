<template>
  <q-page padding class="flex flex-center column">
    <recipe-input></recipe-input>
    <import-chrome-bookmarks class="q-mt-lg"></import-chrome-bookmarks>
  </q-page>
</template>

<script>
import RecipeInput from "../components/CreateRecipe/RecipeInput";
import ImportChromeBookmarks from "../components/CreateRecipe/ImportChromeBookmarks";

export default {
  name: "CreateRecipe",
  components: {
    RecipeInput,
    ImportChromeBookmarks
  }
};
</script>

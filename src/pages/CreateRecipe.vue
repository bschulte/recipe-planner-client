<template>
  <q-page padding class="flex flex-center">
    <recipe-input></recipe-input>
  </q-page>
</template>

<script>
import RecipeInput from "../components/CreateRecipe/RecipeInput";

export default {
  name: "CreateRecipe",
  components: {
    RecipeInput
  }
};
</script>

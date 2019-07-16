<template>
  <q-card>
    <q-card-section>
      <q-btn color="primary" class="full-width" @click="generateRecipes"
        >Generate</q-btn
      >
    </q-card-section>

    <q-card-section>
      <q-markup-table>
        <tbody>
          <tr v-for="(recipe, index) in recipesForTheWeek" v-bind:key="index">
            <td>
              <a :href="recipe.url" target="_blank">{{ recipe.name }}</a>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { GET_RECIPES } from "../../graphql/queries";

export default {
  name: "RecipesForTheWeek",

  data() {
    return {
      recipesForTheWeek: []
    };
  },

  methods: {
    generateRecipes() {
      console.log("Generating recipes for the week");

      const recipesClone = this.recipes.slice(0);
      const newRecipes = [];
      const DAYS_IN_WEEK = 7;

      for (let i = 0; i < DAYS_IN_WEEK; i++) {
        const randomIndex = this.getRandomRecipeIndex(recipesClone);
        newRecipes.push(recipesClone[randomIndex]);

        // Remove the randomly chosen recipe so it won't get chosen again
        recipesClone.splice(randomIndex, 1);
      }

      console.log("New Recipes:", newRecipes);
      this.recipesForTheWeek = newRecipes;
    },

    getRandomRecipeIndex(recipes) {
      return Math.floor(Math.random() * recipes.length);
    }
  },

  apollo: {
    recipes: {
      query: GET_RECIPES
    }
  }
};
</script>

<style lang="stylus" scoped></style>

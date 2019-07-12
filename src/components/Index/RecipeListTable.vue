<template>
  <div>
    <div>This is where your home page content will go</div>
    <div>
      <q-markup-table>
        <tr v-for="recipe in recipes" v-bind:key="recipe.id">
          <td>
            {{ recipe.name }}
          </td>
        </tr>
      </q-markup-table>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "RecipeListTable",

  apollo: {
    recipes: {
      query: gql`
        {
          recipes {
            id
            url
            name
            dishType
          }
        }
      `
    }
  }
};
</script>

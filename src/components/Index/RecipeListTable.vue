<template>
  <div>
    <q-markup-table>
      <tbody>
        <tr v-for="recipe in recipes" v-bind:key="recipe.id">
          <td>{{ recipe.name }} - {{ recipe.dishType }}</td>
          <td>
            <q-btn @click="deleteRecipe(recipe.id)" round icon="far fa-times" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { GET_RECIPES } from "../../graphql/queries";

export default {
  name: "RecipeListTable",

  apollo: {
    recipes: {
      query: GET_RECIPES
    }
  },

  methods: {
    async deleteRecipe(id) {
      const response = await this.$apollo.mutate({
        mutation: gql`
          mutation($id: Float!) {
            deleteRecipe(id: $id) {
              id
              url
              name
              dishType
            }
          }
        `,

        variables: {
          id
        },

        refetchQueries: [{ query: GET_RECIPES }],
        awaitRefetchQueries: true
      });

      console.log("Delete response:", response);
    }
  }
};
</script>

<template>
  <q-card style="width:50%">
    <q-card-section>
      <q-input v-model="name" label="Name"></q-input>
      <q-input v-model="url" label="URL"></q-input>
      <q-input v-model="dishType" label="Dish Type"></q-input>
    </q-card-section>

    <q-card-section>
      <q-btn color="primary" @click="createRecipe" class="q-mt-md full-width">
        Create
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import gql from "graphql-tag";
import { GET_RECIPES } from "../../graphql/queries";

export default {
  name: "RecipeInput",

  data() {
    return {
      name: "",
      url: "",
      dishType: ""
    };
  },

  methods: {
    async createRecipe() {
      console.log("Creating new recipe");
      const response = await this.$apollo.mutate({
        mutation: gql`
          mutation($recipeInput: RecipeInput!) {
            createRecipe(recipeInput: $recipeInput) {
              id
            }
          }
        `,

        variables: {
          recipeInput: {
            name: this.name,
            url: this.url,
            dishType: this.dishType
          }
        },

        refetchQueries: [{ query: GET_RECIPES }],
        awaitRefetchQueries: true
      });

      console.log("Created recipe id:", response.data.createRecipe.id);

      this.name = "";
      this.url = "";
      this.dishType = "";
    }
  }
};
</script>

<style lang="stylus" scoped></style>

<template>
  <q-page padding class="flex flex-center">
    <q-card style="width:50%">
      <q-card-section>
        <q-input v-model="name" label="Name"></q-input>
        <q-input v-model="url" label="URL"></q-input>
        <q-input v-model="dishType" label="Dish Type"></q-input>
        <q-btn @click="createRecipe" class="q-mt-md full-width">Create</q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CreateRecipe",

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
        }
      });

      console.log("Created recipe id:", response.data.createRecipe.id);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~quasar-variables';
</style>

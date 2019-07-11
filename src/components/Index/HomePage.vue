<template>
  <div>
    <div>This is where your home page content will go</div>
    <div>
      <ul>
        <li v-for="recipe in recipes" v-bind:key="recipe.id">
          {{ recipe.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "HomePage",

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

<style lang="stylus" scoped>
@import '~quasar-variables';
</style>

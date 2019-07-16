<template>
  <q-card>
    <q-card-section>
      <strong>Import Chrome Bookmarks</strong>
    </q-card-section>

    <q-card-section>
      <q-input
        @input="
          val => {
            file = val[0];
          }
        "
        filled
        accept=".html"
        type="file"
        hint="Bookmarks HTML File"
      />
    </q-card-section>

    <q-card-section>
      <q-btn
        color="primary"
        @click="importBookmarks"
        class="full-width"
        :disable="file === null"
      >
        Import
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "ImportChromeBookmarks",

  data() {
    return {
      file: null
    };
  },

  methods: {
    async importBookmarks() {
      const formData = new FormData();
      formData.append("bookmarks", this.file);

      const response = await this.$axios.post(
        "/importer/chrome-bookmarks",
        formData
      );

      console.log("Import response:", response);
    }
  }
};
</script>

<style lang="stylus" scoped></style>

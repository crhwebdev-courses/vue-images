<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <div v-for="image in allImages" :allImages="allImages">
        <img :src="image.link" :alt="image.title" />
      </div>
    </div>
    <h2 v-else>Login to get started</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  methods: {
    ...mapActions(["fetchImages"])
  },
  computed: {
    ...mapGetters(["allImages", "isLoggedIn"])
  },
  created() {
    // Vue Lifecycle method that gets called after a component
    // is created -- this is where we will finalize the auth
    this.fetchImages();
  }
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>

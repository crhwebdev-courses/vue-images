<template>
  <div class="image-container">
    <div v-for="image in allImages" :allImages="allImages">
      <img :src="image.link" :alt="image.title" />
    </div>
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
    ...mapGetters(["allImages"])
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

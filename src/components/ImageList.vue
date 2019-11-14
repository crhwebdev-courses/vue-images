<template>
  <div>
    <div v-for="image in allImages" :allImages="allImages">
      <h4>{{ image.title }}</h4>
      <p>{{ image.description }}</p>
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

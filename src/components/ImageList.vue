<template>
  <div>Image List</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ImageList",
  methods: {
    ...mapActions(["fetchImages"])
  },
  created() {
    // Vue Lifecycle method that gets called after a component
    // is created -- this is where we will finalize the auth
    this.fetchImages();
  }
};
</script>

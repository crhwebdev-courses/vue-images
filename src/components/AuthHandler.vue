<template>
  <div>
    Please wait...
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: {
    ...mapActions(["finalizeLogin"])
  },
  created() {
    // Vue Lifecycle method that gets called after a component
    // is created -- this is where we will finalize the auth
    this.finalizeLogin(window.location.hash);
  }
};
</script>

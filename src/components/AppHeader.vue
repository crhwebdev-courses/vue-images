<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Image Storage
    </a>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
//Note: mapActions allows us to map our actions to methods that
// can be used in the vue component
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login"])
  }
};
</script>

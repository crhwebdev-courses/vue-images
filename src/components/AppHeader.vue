<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Image Storage
    </a>
    <div class="right menu">
      <div v-if="isLoggedIn">
        Stuff
      </div>
      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
//Note: mapActions allows us to map our actions to methods that
// can be used in the vue component
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

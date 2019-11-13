<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Image Storage
    </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="ui item">Galleries</router-link>
        <router-link to="/upload" class="ui item">Upload</router-link>
        <a href="#" class="ui item" @click="logout">Logout</a>
      </div>
      <div v-else class="horizontal">
        <a href="#" class="ui item" @click="login">
          Login
        </a>
      </div>
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
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style scoped>
.horizontal {
  display: flex;
}
</style>

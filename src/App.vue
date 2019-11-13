<template>
  <div>
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

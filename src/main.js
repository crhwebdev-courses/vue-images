import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import AuthHandler from "./components/AuthHandler";
import store from "./store/";

//Add VueRouter as middleware
Vue.use(VueRouter);

//initialize VueRouter with routes we are using
const router = new VueRouter({
  routes: [{ path: "/oauth2/callback", component: AuthHandler }]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

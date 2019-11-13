import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";
import store from "./store/";

//Add VueRouter as middleware
Vue.use(VueRouter);

//initialize VueRouter with routes we are using and set mode to 'history'
// which means to use a BrowserRouter instead of HashRouter
export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/oauth2/callback", component: AuthHandler },
    { path: "/images", component: ImageList },
    { path: "/upload", component: UploadForm }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

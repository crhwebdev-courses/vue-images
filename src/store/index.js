/* eslint-disable */

import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth";
import images from "./modules/images";

//connect Vuex to Vue using... it's maaagic.
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    images
  }
});

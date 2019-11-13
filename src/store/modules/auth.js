import api from "../../api/imgur";
import qs from "qs";

const state = {
  token: window.localStorage.getItem("imgur_token") || null
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  logout: ({ commit }) => {
    //note: need to run commit function passed to actions
    // to run a mutation
    commit("setToken", null);
    window.localStorage.removeItem("imgur_token");
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace("#", ""));
    commit("setToken", query.access_token);
    window.localStorage.setItem("imgur_token", query.access_token);
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

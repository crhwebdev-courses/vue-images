import api from "../../api/imgur";

const state = {
  token: null
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  logout: ({ commit }) => {
    //note: need to run commit function passed to actions
    // to run a mutation
    commit("setToken", null);
  },
  login: () => {
    api.login();
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

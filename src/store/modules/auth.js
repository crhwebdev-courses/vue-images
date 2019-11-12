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
  login: () => {}
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

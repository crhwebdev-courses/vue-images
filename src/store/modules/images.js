import api from "../../api/imgur";

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit("setImages", response.data.data);
  },
  uploadImages({ rootState, ommit }, images) {
    // 1. Get the access token
    const { token } = rootState.auth;
    // 2. Call upload funtion from imgur api module

    // 3. Redirect user to root route
  }
};

const mutations = {
  setImages(state, images) {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

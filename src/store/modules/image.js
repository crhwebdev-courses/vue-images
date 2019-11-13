import api from "../../api/imgur";
import qs from "qs";

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  fetchImages: () => {},
  uploadImage: image => {}
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

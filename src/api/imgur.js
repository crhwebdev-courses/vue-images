import qs from "qs";
import imgur from "../store/credentials/imgur.js";
import axios from "axios";

const { clientID } = imgur;
const ROOT_URL = "https://api.imgur.com/";

export default {
  login() {
    const querystring = {
      client_id: clientID,
      response_type: "token"
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map(image => {
      // use js function to attach actual file as form data
      const formData = new FormData();
      formData.append("image", image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });

    // return collection of promises as a single promise
    return Promise.all(promises);
  }
};

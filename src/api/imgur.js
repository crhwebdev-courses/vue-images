import qs from "qs";
import imgur from "../store/credentials/imgur.js";

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
  }
};

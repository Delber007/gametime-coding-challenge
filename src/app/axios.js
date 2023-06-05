import Axios from "axios";

/**
 * creates an axios instance for easy API implementation
 */
const axios = Axios.create({
  baseURL: `https://mobile-staging.gametime.co/v1`,
});

export default axios;

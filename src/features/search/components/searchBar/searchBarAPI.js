import axios from "../../../../app/axios";

/**
 * Function for quering results from the API
 */
export async function fetchSearchResults(query) {
  try {
    const response = await axios.get(`/search?q=${query}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

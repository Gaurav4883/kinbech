import axios from "axios";
import Cookies from "js-cookie";
export const fileBaseUrl = "https://www.wascreation.com/files";
// Fetcher function
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const baseURL = "https://www.wascreation.com/api/";

// setting the token
axios.defaults.headers.common["Authorization"] =
  "Bearer " + Cookies.get("jwtToken");

export async function CallApi(url, data) {
  return await axios.post(baseURL + url, data);
}

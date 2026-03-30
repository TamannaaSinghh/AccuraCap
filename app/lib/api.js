import axios from "axios";

const API_URL = "https://your-wordpress-site.com/wp-json/wp/v2";

export const getData = async (endpoint) => {
  const res = await axios.get(`${API_URL}/${endpoint}`);
  return res.data;
};

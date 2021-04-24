import axios from "axios";
const KEY = process.env.REACT_APP_NASA_API_KEY;
export default axios.create({
  baseURL: "https://api.nasa.gov",
  params: {
    api_key: KEY,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

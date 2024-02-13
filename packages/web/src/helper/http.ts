import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 1000,
});
export default client;
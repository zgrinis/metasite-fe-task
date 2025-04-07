import axios from "axios";

const VITE_API_ADDRESS =
  import.meta.env.VITE_API_ADDRESS ??
  "https://frontend-task-api.metasite.lt/api";
const api = axios.create({
  baseURL: VITE_API_ADDRESS,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

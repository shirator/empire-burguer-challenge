import axios from "axios";

const api = axios.create({
  baseURL: "https://api.brchallenges.com/api/empire-burger",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default api;

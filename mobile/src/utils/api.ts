import axios from "axios"

export const api = axios.create({
  // baseURL: "http://192.168.0.123:8000",
  baseURL: "http://192.168.1.79:8000"
});

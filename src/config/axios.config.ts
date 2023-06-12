import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

if (!BASE_URL) {
  throw new Error("BACKEND_BASE_URL is not defined");
}

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export default instance;

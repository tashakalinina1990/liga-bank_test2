import axios from "axios";
import { BACKEND_URL, REQUEST_TIMEOUT } from "./const";

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    Header: { "Access-Control-Allow-Origin": "origin-list" },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

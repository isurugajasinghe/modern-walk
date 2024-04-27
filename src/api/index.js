import axios from "axios";

import { config } from "../config";

const axiosClient = () => {
  const { url } = config;
  let headers = {};

  headers = {
    "Content-Type": "application/json",
  };

  const client = axios.create({
    baseURL: url,
    headers,
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        return Promise.reject({ errors: ["Connection error"] });
      }

      return Promise.reject(error.response.data);
    }
  );

  return client;
};

export default axiosClient;

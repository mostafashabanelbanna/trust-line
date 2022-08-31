import axios from "axios";

const _PublishedUrl = "https://jsonplaceholder.typicode.com";

const API = axios.create({
  baseURL: _PublishedUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default API;

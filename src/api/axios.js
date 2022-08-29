import axios from "axios";

const _PublishedUrl = "http://empf2019-001-site7.htempurl.com/api";
const _LocalUrl = "https://localhost:7097/api";

const API = axios.create({
  baseURL: _PublishedUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default API;

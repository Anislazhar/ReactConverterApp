import axios from "axios";

const instance = axios.create({
  baseURL: "https://currency-f3ddd.firebaseio.com/",
});

export default instance;

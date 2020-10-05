import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-f2cd1.firebaseio.com/",
});

export default instance;

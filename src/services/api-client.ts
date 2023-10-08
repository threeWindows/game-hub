import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api", //platforms?
  params: {
    key: "bf8819cbe29541b9a2d97d776dab9c73"
  }
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "5a5448341bab4c289b442d3cb03a58f5",
  },
});

import axios from "axios";
const baseUrl = "/api/products";

import { store } from "../store";

const getAll = async () => {
  const request = await axios.get(baseUrl);
  store.commit("ADD_PRODUCTS", request.data);
};

const getProduct = async (id) => {
  const request = await axios.get(baseUrl + "/" + id);
  store.commit("ADD_PRODUCTS", [request.data]);
};

export default { getAll, getProduct };

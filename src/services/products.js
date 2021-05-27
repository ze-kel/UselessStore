import axios from "axios";
const baseUrl = "/api/products";

import { store } from "../store";

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const getSize = async () => {
  const request = await axios.get(baseUrl + "/dbSize");
  return request.data;
};

const getPage = async (pageNumber, pageSize) => {
  const request = await axios.get(
    baseUrl + `?offset=${pageNumber * pageSize}&limit=${pageSize}`
  );
  return request.data;
};

const getProduct = async (id) => {
  const request = await axios.get(baseUrl + "/" + id);
  return request.data;
};

export default { getAll, getProduct, getPage, getSize };

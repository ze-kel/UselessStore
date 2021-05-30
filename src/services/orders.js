import axios from "axios";
const baseUrl = "/api/orders";

const makeOrder = async (data) => {
  const request = await axios.post(baseUrl, data);
  if (request.status === 200) {
    return true;
  }
  return false;
};

export default { makeOrder };

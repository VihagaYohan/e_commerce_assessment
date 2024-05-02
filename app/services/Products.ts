// api
import { BaseAPI, Endpoints } from "../api/index";
import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get(Endpoints.productList);
    return response;
  } catch (e) {
    throw Error(`Faile : ${e.message}`);
  }
};

export default {
  getProducts,
};

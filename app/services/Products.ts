// api
import { BaseAPI, Endpoints } from "../api/index";
import axios from "axios";

const getProducts = async () => {
  try {
    const response = await BaseAPI.get(Endpoints.productList);
    return response;
  } catch (e) {
    console.log(JSON.stringify(e));
    throw Error(`Failed : ${e.message}`);
  }
};

export default {
  getProducts,
};

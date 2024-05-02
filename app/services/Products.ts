// api
import { BaseAPI, Endpoints } from "../api/index";

class ProductsService {
  static getProducts = async () => {
    try {
      const response = await BaseAPI.get(Endpoints.productList);
      return response;
    } catch (e) {
      throw Error(`Faile : ${e.message}`);
    }
  };
}

export default ProductsService;

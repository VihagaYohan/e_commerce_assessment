// models
import { Product } from "../models/index.js";

type RootParamList = {
  home_navigator: undefined;
  product_list_screen: undefined;
  product_details_screen: {
    item: Product;
  };
  cart_screen: undefined;
};

export default RootParamList;

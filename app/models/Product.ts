// models
import { Price } from "./index";

// enums
import { StockStatus } from "../enums/Index";

interface Product {
  id: string;
  SKU: string;
  name: string;
  brandName: string;
  mainImage: string;
  price: Price;
  sizes: string[];
  stockStatus: StockStatus;
  colour: string;
  description: string;
}

export default Product;

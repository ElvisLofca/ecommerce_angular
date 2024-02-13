import {Product} from "../../models/product.model";

export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: any;
}

import {Order} from "../../models/order.model";

export interface OrderState {
  orders: Order[];
  selectedOrder: Order | null;
  loading: boolean;
  error: any;
}

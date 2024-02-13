import { createSelector, createFeatureSelector } from '@ngrx/store';
import {OrderState} from "./order.state";

export const selectOrderState = createFeatureSelector<OrderState>('orders');

export const selectAllOrders = createSelector(
  selectOrderState,
  (state: OrderState) => state.orders
);

export const selectSelectedOrder = createSelector(
  selectOrderState,
  (state: OrderState) => state.selectedOrder
);

export const selectOrderLoading = createSelector(
  selectOrderState,
  (state: OrderState) => state.loading
);

export const selectOrderError = createSelector(
  selectOrderState,
  (state: OrderState) => state.error
);

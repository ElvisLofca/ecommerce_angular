import { createReducer, on } from '@ngrx/store';
import * as OrderActions from './order.actions';
import {OrderState} from "./order.state";

const initialState: OrderState = {
  orders: [],
  selectedOrder: null,
  loading: false,
  error: null
};


export const orderReducer = createReducer(
  initialState,
  on(OrderActions.LOAD_ORDERS, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(OrderActions.LOAD_ORDERS_SUCCESS, (state, { orders }) => ({
    ...state,
    orders,
    loading: false,
    error: null
  })),
  on(OrderActions.LOAD_ORDERS_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(OrderActions.GET_ORDER, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(OrderActions.GET_ORDER_SUCCESS, (state, { order }) => ({
    ...state,
    selectedOrder: order,
    loading: false,
    error: null
  })),
  on(OrderActions.GET_ORDER_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(OrderActions.CREATE_ORDER, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(OrderActions.CREATE_ORDER_SUCCESS, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
    loading: false,
    error: null
  })),
  on(OrderActions.CREATE_ORDER_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(OrderActions.UPDATE_ORDER, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(OrderActions.UPDATE_ORDER_SUCCESS, (state, { order }) => ({
    ...state,
    orders: state.orders.map(o => o.id === order.id ? order : o),
    loading: false,
    error: null
  })),
  on(OrderActions.UPDATE_ORDER_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(OrderActions.DELETE_ORDER, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(OrderActions.DELETE_ORDER_SUCCESS, (state, { id }) => ({
    ...state,
    orders: state.orders.filter(o => o.id !== id),
    loading: false,
    error: null
  })),
  on(OrderActions.DELETE_ORDER_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

import { createAction, props } from '@ngrx/store';
import { Order } from '../../models/order.model';

// Load Orders
export const LOAD_ORDERS = createAction('[Order] Load Orders');
export const LOAD_ORDERS_SUCCESS = createAction('[Order] Load Orders Success', props<{ orders: Order[] }>());
export const LOAD_ORDERS_FAILURE = createAction('[Order] Load Orders Failure', props<{ error: any }>());

// Get Order
export const GET_ORDER = createAction('[Order] Get Order', props<{ id: number }>());
export const GET_ORDER_SUCCESS = createAction('[Order] Get Order Success', props<{ order: Order }>());
export const GET_ORDER_FAILURE = createAction('[Order] Get Order Failure', props<{ error: any }>());

// Create Order
export const CREATE_ORDER = createAction('[Order] Create Order', props<{ order: Order }>());
export const CREATE_ORDER_SUCCESS = createAction('[Order] Create Order Success', props<{ order: Order }>());
export const CREATE_ORDER_FAILURE = createAction('[Order] Create Order Failure', props<{ error: any }>());

// Update Order
export const UPDATE_ORDER = createAction('[Order] Update Order', props<{ order: Order }>());
export const UPDATE_ORDER_SUCCESS = createAction('[Order] Update Order Success', props<{ order: Order }>());
export const UPDATE_ORDER_FAILURE = createAction('[Order] Update Order Failure', props<{ error: any }>());

// Delete Order
export const DELETE_ORDER = createAction('[Order] Delete Order', props<{ id: number }>());
export const DELETE_ORDER_SUCCESS = createAction('[Order] Delete Order Success', props<{ id: number }>());
export const DELETE_ORDER_FAILURE = createAction('[Order] Delete Order Failure', props<{ error: any }>());

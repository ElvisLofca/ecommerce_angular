import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

// Load Products
export const LOAD_PRODUCTS = createAction('[Product] Load Products');
export const LOAD_PRODUCTS_SUCCESS = createAction('[Product] Load Products Success', props<{ products: Product[] }>());
export const LOAD_PRODUCTS_FAILURE = createAction('[Product] Load Products Failure', props<{ error: any }>());

// Get Product
export const GET_PRODUCT = createAction('[Product] Get Product', props<{ id: number }>());
export const GET_PRODUCT_SUCCESS = createAction('[Product] Get Product Success', props<{ product: Product }>());
export const GET_PRODUCT_FAILURE = createAction('[Product] Get Product Failure', props<{ error: any }>());

// Create Product
export const CREATE_PRODUCT = createAction('[Product] Create Product', props<{ product: Product }>());
export const CREATE_PRODUCT_SUCCESS = createAction('[Product] Create Product Success', props<{ product: Product }>());
export const CREATE_PRODUCT_FAILURE = createAction('[Product] Create Product Failure', props<{ error: any }>());

// Update Product
export const UPDATE_PRODUCT = createAction('[Product] Update Product', props<{ product: Product }>());
export const UPDATE_PRODUCT_SUCCESS = createAction('[Product] Update Product Success', props<{ product: Product }>());
export const UPDATE_PRODUCT_FAILURE = createAction('[Product] Update Product Failure', props<{ error: any }>());

// Delete Product
export const DELETE_PRODUCT = createAction('[Product] Delete Product', props<{ id: number }>());
export const DELETE_PRODUCT_SUCCESS = createAction('[Product] Delete Product Success', props<{ id: number }>());
export const DELETE_PRODUCT_FAILURE = createAction('[Product] Delete Product Failure', props<{ error: any }>());

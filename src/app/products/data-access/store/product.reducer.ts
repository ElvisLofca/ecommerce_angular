import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import {ProductState} from "./product.state";

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null
};


export const productReducer = createReducer(
  initialState,
  on(ProductActions.LOAD_PRODUCTS, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.LOAD_PRODUCTS_SUCCESS, (state, { products }) => ({
    ...state,
    products,
    loading: false,
    error: null
  })),
  on(ProductActions.LOAD_PRODUCTS_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ProductActions.GET_PRODUCT, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.GET_PRODUCT_SUCCESS, (state, { product }) => ({
    ...state,
    selectedProduct: product,
    loading: false,
    error: null
  })),
  on(ProductActions.GET_PRODUCT_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ProductActions.CREATE_PRODUCT, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.CREATE_PRODUCT_SUCCESS, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    loading: false,
    error: null
  })),
  on(ProductActions.CREATE_PRODUCT_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ProductActions.UPDATE_PRODUCT, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.UPDATE_PRODUCT_SUCCESS, (state, { product }) => ({
    ...state,
    products: state.products.map(p => p.id === product.id ? product : p),
    loading: false,
    error: null
  })),
  on(ProductActions.UPDATE_PRODUCT_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ProductActions.DELETE_PRODUCT, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.DELETE_PRODUCT_SUCCESS, (state, { id }) => ({
    ...state,
    products: state.products.filter(p => p.id !== id),
    loading: false,
    error: null
  })),
  on(ProductActions.DELETE_PRODUCT_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

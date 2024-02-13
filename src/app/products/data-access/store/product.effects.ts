import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {exhaustMap, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as ProductActions from './product.actions';
import {ProductService} from '../product.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ProductActions.LOAD_PRODUCTS),
        switchMap(() =>
          this.productService.getProducts().pipe(
            map(products => ProductActions.LOAD_PRODUCTS_SUCCESS({products})),
            catchError(error => of(ProductActions.LOAD_PRODUCTS_FAILURE({error})))
          )
        )
      )
    }
  );

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.GET_PRODUCT),
      switchMap(({id}) =>
        this.productService.getProduct(id).pipe(
          map(product => ProductActions.GET_PRODUCT_SUCCESS({product})),
          catchError(error => of(ProductActions.GET_PRODUCT_FAILURE({error})))
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.CREATE_PRODUCT),
      switchMap(({product}) =>
        this.productService.createProduct(product).pipe(
          map(createdProduct => ProductActions.CREATE_PRODUCT_SUCCESS({product: createdProduct})),
          catchError(error => of(ProductActions.CREATE_PRODUCT_FAILURE({error})))
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.UPDATE_PRODUCT),
      switchMap(({product}) =>
        this.productService.updateProduct(product).pipe(
          map(updatedProduct => ProductActions.UPDATE_PRODUCT_SUCCESS({product: updatedProduct})),
          catchError(error => of(ProductActions.UPDATE_PRODUCT_FAILURE({error})))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.DELETE_PRODUCT),
      switchMap(({id}) =>
        this.productService.deleteProduct(id).pipe(
          map(() => ProductActions.DELETE_PRODUCT_SUCCESS({id})),
          catchError(error => of(ProductActions.DELETE_PRODUCT_FAILURE({error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {
  }
}

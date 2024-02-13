import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {exhaustMap, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as OrderActions from './order.actions';
import {OrderService} from '../order.service';

@Injectable()
export class OrderEffects {
  loadOrders$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(OrderActions.LOAD_ORDERS),
        switchMap(() =>
          this.orderService.getOrders().pipe(
            map(orders => OrderActions.LOAD_ORDERS_SUCCESS({orders})),
            catchError(error => of(OrderActions.LOAD_ORDERS_FAILURE({error})))
          )
        )
      )
    }
  );

  getOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.GET_ORDER),
      switchMap(({id}) =>
        this.orderService.getOrder(id).pipe(
          map(order => OrderActions.GET_ORDER_SUCCESS({order})),
          catchError(error => of(OrderActions.GET_ORDER_FAILURE({error})))
        )
      )
    )
  );

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.CREATE_ORDER),
      switchMap(({order}) =>
        this.orderService.createOrder(order).pipe(
          map(createdOrder => OrderActions.CREATE_ORDER_SUCCESS({order: createdOrder})),
          catchError(error => of(OrderActions.CREATE_ORDER_FAILURE({error})))
        )
      )
    )
  );

  updateOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.UPDATE_ORDER),
      switchMap(({order}) =>
        this.orderService.updateOrder(order).pipe(
          map(updatedOrder => OrderActions.UPDATE_ORDER_SUCCESS({order: updatedOrder})),
          catchError(error => of(OrderActions.UPDATE_ORDER_FAILURE({error})))
        )
      )
    )
  );

  deleteOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.DELETE_ORDER),
      switchMap(({id}) =>
        this.orderService.deleteOrder(id).pipe(
          map(() => OrderActions.DELETE_ORDER_SUCCESS({id})),
          catchError(error => of(OrderActions.DELETE_ORDER_FAILURE({error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {
  }
}

import {inject} from '@angular/core';
import {
  HttpInterceptorFn,
} from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import {first} from 'rxjs';
import * as AuthSelectors from './auth/data-access/store/auth.selectors';
import {switchMap} from "rxjs/operators";
import {AuthState} from "./auth/data-access/store/app.state";

export const authInterceptor:  HttpInterceptorFn = (req, next) => {

  let store: Store<AuthState> = inject(Store);
  return store.pipe(
    select(AuthSelectors.selectAccess),


    first(),
    switchMap(access$ => {
      const authRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${access$}`
        }
      });
      return next(authRequest);
    })
  );
}




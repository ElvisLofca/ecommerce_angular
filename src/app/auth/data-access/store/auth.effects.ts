import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import {AuthService} from "../auth.service";

@Injectable()
export class AuthEffects {

  signIn$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.SIGN_IN),
    switchMap(({ username, password }) =>
      this.authService.signIn({username, password}).pipe(
        map(({ access, refresh }) => AuthActions.SIGN_IN_SUCCESS({ access, refresh })),
        catchError((error) => of(AuthActions.SIGN_IN_FAILURE({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}

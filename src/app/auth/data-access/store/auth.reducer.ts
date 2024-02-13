import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import {AuthState} from "./app.state";

export const initialState: AuthState = {
  access: null,
  refresh: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.SIGN_IN_SUCCESS, (state, { access, refresh }) => ({
    ...state,
    access,
    refresh,
    error: null
  })),
  on(AuthActions.SIGN_IN_FAILURE, (state, { error }) => ({
    ...state,
    error
  })),
  on(AuthActions.SIGN_OUT, () => initialState)
);

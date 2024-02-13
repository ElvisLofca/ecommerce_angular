import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AuthState} from "./app.state";

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAccess = createSelector(
  selectAuthState,
  (state) => state.access
);

export const selectRefresh = createSelector(
  selectAuthState,
  (state) => state.refresh
);

export const selectError = createSelector(
  selectAuthState,
  (state) => state.error
);

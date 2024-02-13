import { createAction, props } from '@ngrx/store';

export const SIGN_IN = createAction('[Auth] Sign In', props<{ username: string, password: string }>());
export const SIGN_IN_SUCCESS = createAction('[Auth] Sign In Success', props<{ access: string, refresh: string }>());
export const SIGN_IN_FAILURE = createAction('[Auth] Sign In Failure', props<{ error: any }>());
export const SIGN_OUT = createAction('[Auth] Sign Out');

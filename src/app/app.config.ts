import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideState, provideStore} from '@ngrx/store';
import {authReducer} from "./auth/data-access/store/auth.reducer";
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideEffects} from "@ngrx/effects";
import {AuthEffects} from "./auth/data-access/store/auth.effects";
import {productReducer} from "./products/data-access/store/product.reducer";
import {ProductEffects} from "./products/data-access/store/product.effects";
import {authInterceptor} from "./auth.interceptor";
import {OrderEffects} from "./orders/data-access/store/order.effects";
import {orderReducer} from "./orders/data-access/store/order.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(),
    provideState({name: 'auth', reducer: authReducer}),
    provideState({name: 'products', reducer: productReducer}),
    provideState({name: 'orders', reducer: orderReducer}),
    provideEffects(AuthEffects, ProductEffects, OrderEffects),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()})
  ]
};

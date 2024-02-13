import { Routes } from '@angular/router';
import {SignInComponent} from "./auth/features/signin/signin.component";
import {SignUpComponent} from "./auth/features/signup/signup.component";
import {ProductsListComponent} from "./products/features/products-list/products-list.component";
import {OrdersListComponent} from "./orders/features/orders-list/orders-list.component";

export const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'orders', component: OrdersListComponent},
  // {path: 'reviews', component: SignUpComponent},
  // {path: 'users', component: SignUpComponent},
];

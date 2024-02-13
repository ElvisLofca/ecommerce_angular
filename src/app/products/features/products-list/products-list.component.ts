import {Component, OnInit} from '@angular/core';
import {selectAllProducts} from "../../data-access/store/product.selectors";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {AsyncPipe, NgForOf} from "@angular/common";
import * as ProductActions from '../../data-access/store/product.actions';
import {ProductState} from "../../data-access/store/product.state";
import {
  MatCard, MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    MatCardContent,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatCardAvatar,
    MatCardHeader,
    MatCard,
    MatCardActions,
    MatButton
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>  = this.store.select(selectAllProducts);

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.LOAD_PRODUCTS());
  }

  protected readonly environment = environment;
}

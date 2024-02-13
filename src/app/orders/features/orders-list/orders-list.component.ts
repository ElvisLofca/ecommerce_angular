import {Component} from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {Observable} from "rxjs";
import {Order} from "../../../orders/models/order.model";
import {selectAllOrders} from "../../../orders/data-access/store/order.selectors";
import {Store} from "@ngrx/store";
import * as OrderActions from "../../../orders/data-access/store/order.actions";
import {OrderState} from "../../data-access/store/order.state";

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf
  ],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent {
  orders$: Observable<Order[]> = this.store.select(selectAllOrders);

  constructor(private store: Store<OrderState>) {}

  ngOnInit(): void {
    this.store.dispatch(OrderActions.LOAD_ORDERS());
  }


  protected readonly environment = environment;
}

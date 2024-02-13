import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatAnchor, MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import * as AuthActions from "./auth/data-access/store/auth.actions";
import {Store} from "@ngrx/store";

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatMenu,
    MatMenuTrigger,
    MatButton,
    MatMenuItem,
    MatIcon,
    MatMiniFabButton,
    MatDivider,
    MatFabButton,
    MatIconButton,
    MatAnchor,
    MatListItem,
    MatListSubheaderCssMatStyler,
    MatList,
    MatToolbar,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce_angular';

  constructor(private store: Store, private route: Router) {}


  onSignOut(){
    this.store.dispatch(AuthActions.SIGN_OUT());
    this.route.navigate(['/signin'])
  }
}

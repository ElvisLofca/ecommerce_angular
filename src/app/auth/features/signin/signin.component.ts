import { Component } from '@angular/core';
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import * as AuthActions from '../../data-access/store/auth.actions';
import {FormsModule, NgForm} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AuthState} from "../../data-access/store/app.state";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    MatLabel,
    MatIcon,
    MatHint,
    MatFormField,
    MatInput,
    MatIconButton,
    MatButton,
    RouterLink,
    RouterOutlet,
    FormsModule,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SignInComponent{
  hide: boolean = false;

  constructor(private store: Store<AuthState>, private route: Router) {}

  onSignIn(form: NgForm): void {
    this.store.dispatch(AuthActions.SIGN_IN({...form.value}));
    this.route.navigate(['/'])
  }
}

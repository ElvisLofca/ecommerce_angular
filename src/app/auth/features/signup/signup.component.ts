import { Component } from '@angular/core';
import {FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../data-access/auth.service";

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  constructor(private auth: AuthService, private router: Router) {}
  hide = true;

  onSingUp(form: NgForm){
    this.auth.signUp(form.value).subscribe(_ => this.router.navigate(['/signin']))
  }
}

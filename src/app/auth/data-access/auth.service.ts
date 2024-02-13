import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }


  signIn(body: {}): Observable<any> {
    return this.http.post(environment.url + 'signin/', body)
  }

  signUp(body: {}){
    return this.http.post(environment.url + 'signup/', body)
  }

  refreshToken(){
    return this.http.get('token/refresh')
  }
}

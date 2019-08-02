import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUserModel } from '../models/AuthUserModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountUrl = environment.apiUrl + 'account/';

  constructor(
    private http: HttpClient
  ) { }

  singIn(user: AuthUserModel) {
    return this.http.post(this.accountUrl + 'singin', user);
  }

  regiser(user: AuthUserModel) {
    return this.http.post(this.accountUrl + 'register', user);
  }
}

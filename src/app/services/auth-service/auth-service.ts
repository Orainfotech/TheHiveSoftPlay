import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  public storage: any;

  constructor(public http: HttpClient) {
    this.storage = new Subject();
    console.log('Hello Provider');
  }
  setSecureToken(secure_Token) {
    secure_Token = JSON.stringify(secure_Token);
    localStorage.setItem('userData', secure_Token);
  }

  getSecureToken() {
    return JSON.parse(localStorage.getItem('userData'));
  }
  clearSecureToken() {
    return localStorage.removeItem('userData');

  }
}

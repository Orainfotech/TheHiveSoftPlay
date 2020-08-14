import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service/auth-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Live
  apiUrl: any = 'http://hive.orainfotech.com/api/';
  headers: any;
  headers1:any;
  token:any;
  constructor(
    public http: HttpClient,
    public platform: Platform,
    public auth:AuthService
  ) {
   this.token=this.auth.getSecureToken();
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

      if(this.token!= null){
        this.headers1 = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authentication',this.token.accessToken);              
      }

  }


  post(endPoint, data) {
    data = { ...data };
    return this.http.post(this.apiUrl + endPoint, data, { headers: this.headers });
  }
  postwithtoken(endPoint, data) {
    data = { ...data };
    return this.http.post(this.apiUrl + endPoint, data, { headers: this.headers1});
  }

}

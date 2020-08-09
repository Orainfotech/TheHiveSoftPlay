import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Live
  apiUrl: any = 'http://hive.orainfotech.com/api/';
  headers: any;
  constructor(
    public http: HttpClient,
    public platform: Platform
  ) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  post(endPoint, data) {
    data = { ...data };
    return this.http.post(this.apiUrl + endPoint, data, { headers: this.headers });
  }


}

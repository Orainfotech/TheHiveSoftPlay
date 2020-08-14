import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonService } from './utills/common.service';
import { Network } from '@ionic-native/network/ngx';
import { NetworkService } from './services/network.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth-service/auth-service';
import { Device } from '@ionic-native/device/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { NotificationService } from './services/notification.service';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    Network,
    NetworkService,
    ApiService,
    AuthService,
    Device,
    FCM,
    FormBuilder,
    NotificationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

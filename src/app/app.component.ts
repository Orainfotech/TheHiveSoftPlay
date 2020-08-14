import { Component, OnInit, ViewChild } from '@angular/core';

import { Platform, IonRouterOutlet, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonService } from './utills/common.service';
import { AuthService } from './services/auth-service/auth-service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  {  
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;
  counter: any = 1;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public common:CommonService,
    public navctrl:NavController,
    public auth:AuthService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#2342a4');
      this.statusBar.styleLightContent();

    });
    var loginParam = this.auth.getSecureToken();
    if (loginParam != null && loginParam != '' && loginParam != undefined) {
      this.navctrl.navigateRoot('home');
    }
    else {
      this.navctrl.navigateRoot('signin');
    }
   
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.navctrl.pop();
      } else if (this.router.url === '/home') {

        if (this.counter == 2) {
          navigator['app'].exitApp();
        } else {
          this.common.showToast('Press again to exit');
          this.counter++;
        }

        setTimeout(() => {
          this.counter = 1;
        }, 3000);
      }
    });
  }

  ngOnInit() {
   
  }
}

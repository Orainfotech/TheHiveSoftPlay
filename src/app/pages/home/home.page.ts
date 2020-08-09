import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public menu:MenuController,public navctrl:NavController) { }

  ngOnInit() {
  }
  booknow(){
    this.navctrl.navigateRoot('mybooking');
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  buzzparty(){
    this.navctrl.navigateRoot('buzzparty');
  }
  contactus(){
    this.navctrl.navigateRoot('contactus');
  }
  editprofile(){
    this.navctrl.navigateRoot('editprofile');
  }
  gotofoodmenu(){
    this.navctrl.navigateRoot('foodmenu');
  }
  gotonotification(){
    this.navctrl.navigateRoot('notification'); 
  }
}

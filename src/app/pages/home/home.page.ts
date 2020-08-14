import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../utills/common.service';
import { NetworkService } from '../../services/network.service';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   partydata:any;
  constructor( public menu:MenuController, public navctrl:NavController,
    public api:ApiService,public common:CommonService,public net:NetworkService,public auth:AuthService ) { }

  ngOnInit() {
    //this.partylistapi();
  }
  booknow(){
    this.navctrl.navigateRoot('mybooking');
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  membership(){
    this.navctrl.navigateRoot('membership');
  }
  privacypolicy(){
    this.navctrl.navigateRoot('privacy-policy');
  }
  termsandcondition(){
    this.navctrl.navigateRoot('termsand-conditions');
  }
  changepassword(){
    this.navctrl.navigateRoot('changepassword');
  }
  partylistapi(){
    if (this.net.netFlag) {
          this.api.postwithtoken('PartyList', null).subscribe((data: any) => {
           console.log(data)
           if (data.status != 1) {
               this.common.showToast(data.message);
             return;
           }
           if (data.status == 1) {
             this.partydata=data.data;
           } else {
             this.common.showAlert('Please Try again!');
           }
         }, error => {
          this.common.showAlert('Please Try again!');
           });
    } else {
      this.common.showAlert('Please connect internet!');
    }
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

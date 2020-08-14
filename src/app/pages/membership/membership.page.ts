import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss'],
})
export class MembershipPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  gotohome(){
 this.navctrl.navigateRoot('home');
  }
}

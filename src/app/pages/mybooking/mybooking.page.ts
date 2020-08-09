import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.page.html',
  styleUrls: ['./mybooking.page.scss'],
})
export class MybookingPage implements OnInit {
  name:any;
  email:any;
  phone:any;
  AddMessage:any;
  redeemcode:any;
  noofchildren:any;
  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  booknow(){
    this.navctrl.navigateRoot('home');

  }
}

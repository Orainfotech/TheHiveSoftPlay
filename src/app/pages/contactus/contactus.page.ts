import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  name:any;
  email:any;
  subject:any;
  Message:any;
  
  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  contactus(){
    this.navctrl.navigateRoot('home');

  }
}

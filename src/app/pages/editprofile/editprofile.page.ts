import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  name:any;
  email:any;
  phonenumber:any;
  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  editpassword(){
    this.navctrl.navigateRoot('home');

  }
}

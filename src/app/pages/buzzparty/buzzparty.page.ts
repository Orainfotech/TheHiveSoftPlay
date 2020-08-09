import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buzzparty',
  templateUrl: './buzzparty.page.html',
  styleUrls: ['./buzzparty.page.scss'],
})
export class BuzzpartyPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  booknow(){
    this.navctrl.navigateRoot('mybooking')
  }
}

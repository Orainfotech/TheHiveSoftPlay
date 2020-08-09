import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.page.html',
  styleUrls: ['./foodmenu.page.scss'],
})
export class FoodmenuPage implements OnInit {

  constructor(public navctrl:NavController) { }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  ngOnInit() {
  }
  gotofooddetails(){
  this.navctrl.navigateRoot('foodmenudetails');
  }
}

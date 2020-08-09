import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodmenuPageRoutingModule } from './foodmenu-routing.module';

import { FoodmenuPage } from './foodmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodmenuPageRoutingModule
  ],
  declarations: [FoodmenuPage]
})
export class FoodmenuPageModule {}

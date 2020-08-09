import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodmenudetailsPageRoutingModule } from './foodmenudetails-routing.module';

import { FoodmenudetailsPage } from './foodmenudetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodmenudetailsPageRoutingModule
  ],
  declarations: [FoodmenudetailsPage]
})
export class FoodmenudetailsPageModule {}

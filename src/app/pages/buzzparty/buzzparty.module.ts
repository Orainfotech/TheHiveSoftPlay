import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzzpartyPageRoutingModule } from './buzzparty-routing.module';

import { BuzzpartyPage } from './buzzparty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzzpartyPageRoutingModule
  ],
  declarations: [BuzzpartyPage]
})
export class BuzzpartyPageModule {}

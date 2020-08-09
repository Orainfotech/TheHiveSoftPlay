import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodmenudetailsPage } from './foodmenudetails.page';

const routes: Routes = [
  {
    path: '',
    component: FoodmenudetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodmenudetailsPageRoutingModule {}

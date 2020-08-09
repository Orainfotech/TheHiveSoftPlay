import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuzzpartyPage } from './buzzparty.page';

const routes: Routes = [
  {
    path: '',
    component: BuzzpartyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuzzpartyPageRoutingModule {}

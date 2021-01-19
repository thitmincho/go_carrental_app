import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseCarPage } from './choose-car.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseCarPageRoutingModule {}

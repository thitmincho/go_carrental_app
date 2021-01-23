import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyReservationPage } from './my-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: MyReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyReservationPageRoutingModule {}

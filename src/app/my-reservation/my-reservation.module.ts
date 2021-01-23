import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyReservationPageRoutingModule } from './my-reservation-routing.module';

import { MyReservationPage } from './my-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyReservationPageRoutingModule
  ],
  declarations: [MyReservationPage]
})
export class MyReservationPageModule {}

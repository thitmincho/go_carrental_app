import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseCarPageRoutingModule } from './choose-car-routing.module';

import { ChooseCarPage } from './choose-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseCarPageRoutingModule
  ],
  declarations: [ChooseCarPage]
})
export class ChooseCarPageModule {}

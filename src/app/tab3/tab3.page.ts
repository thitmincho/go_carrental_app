import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { ExtendModalComponent } from '../extend-modal/extend-modal.component';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  type:string;
  
  constructor(private modalCtrl: ModalController) {}

  async showModal(){
    const modal = await this.modalCtrl.create(
      {
        component: ExtendModalComponent,
        cssClass: 'extend-modal'
      })
      await modal.present();
  }
  ngOnInit(){
    this.type='current'
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}

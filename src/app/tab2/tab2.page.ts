import { Component, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions, CalendarResult } from 'ion2-calendar';
import { CalendarComponent } from 'ionic2-calendar';
import { CalenderModalPage } from '../calender-modal/calender-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  type:string;
  today:any;
  tmr:any;
  tdat:any;

  constructor(private router: Router,private modalCtrl: ModalController) {}

  ngOnInit(){
    this.today= new Date();
    
    this.tmr = new Date(this.today);
    this.tmr.setDate(this.tmr.getDate() + 1);
    
    this.tdat = new Date(this.today);
    this.tdat.setDate(this.tdat.getDate() + 2);

    this.type='within';
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ChooseCar(){
    this.router.navigate(['choose-car']);
  } 


  async openCalendar(){
    const modal = await this.modalCtrl.create(
      {
        component: CalenderModalPage,
        cssClass: 'calendar-modal',
        backdropDismiss: false
      })
    await modal.present();
  }

}

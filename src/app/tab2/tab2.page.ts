import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions, CalendarResult } from 'ion2-calendar';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  type:string;

  constructor(private router: Router,private modalCtrl: ModalController) {}

  ngOnInit(){
    this.type='within'
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ChooseCar(){
    this.router.navigate(['choose-car']);
  } 

  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: "Date Range",
      canBackwardsSelected: true
    };
  
    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      cssClass: 'calendar-modal',
      backdropDismiss: false,
      componentProps: { options }
    });
  
    myCalendar.present();
  
    myCalendar.onDidDismiss().then((result) => {
      if (result.data) {
        let event = result.data;
        const from: CalendarResult = event.from;
        const to: CalendarResult = event.to;
        // this.order.all(from.string+","+to.string).subscribe((data)=>{
        //   if(data["message"]=="Done"){
        //     this.ordersList=data['data'];
        //   }
        // });
       
        
      }
    });
  }  
}

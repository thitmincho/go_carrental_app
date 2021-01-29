import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';


@Component({
  selector: 'app-calender-modal',
  templateUrl: './calender-modal.page.html',
  styleUrls: ['./calender-modal.page.scss'],
})
export class CalenderModalPage implements OnInit {
  eventSource = [];
  viewTitle: string;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  }
  // selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private router: Router, private modalCtrl: ModalController) { }

  // booking() {
  //   this.router.navigate(['booking']);
  //   this.modalCtrl.dismiss();
  // }
  goBack() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }
  next() {
    console.log("next");
    this.myCal.slideNext();
  }
  back() {
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }


}

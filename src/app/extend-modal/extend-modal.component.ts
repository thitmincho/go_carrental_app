import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-extend-modal',
  templateUrl: './extend-modal.component.html',
  styleUrls: ['./extend-modal.component.scss'],
})
export class ExtendModalComponent implements OnInit {
  

  constructor(private router: Router, public modalCtrl: ModalController) { }

  quantity: number = 1;
  i = 1
  plus() {
    this.i++;
    this.quantity = this.i;
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
    }
  }

  ngOnInit() {}
  booking() {    
    this.router.navigate(['booking']);
    this.modalCtrl.dismiss();
  }
  goBack() {
    this.modalCtrl.dismiss();
  }

}

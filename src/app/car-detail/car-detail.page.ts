import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  review(){
    this.router.navigate(['review']);
  }
  extra(){
    this.router.navigate(['extra']);
  }

}

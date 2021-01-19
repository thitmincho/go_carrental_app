import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.page.html',
  styleUrls: ['./choose-car.page.scss'],
})
export class ChooseCarPage implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
  }

  tab2(){
    this.router.navigate(['tab2']);
  }

}

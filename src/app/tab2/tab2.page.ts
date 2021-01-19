import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  type:string;

  constructor(private router: Router) {}

  ngOnInit(){
    this.type='within'
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ChooseCar(){
    this.router.navigate(['choose-car']);
  } 
}

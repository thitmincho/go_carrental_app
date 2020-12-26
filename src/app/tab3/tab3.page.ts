import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  type:string;
  
  constructor() {}
  ngOnInit(){
    this.type='current'
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}

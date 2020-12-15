import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  imgurl:any;
  constructor() {
    
  }
  ngOnInit() {
    this.imgurl = "https://cars.usnews.com/pics/size/640x420/static/images/article/202006/128503/216702_New_Volvo_XC40_-_exterior_640x420.jpg";
  }

}

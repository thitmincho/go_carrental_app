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
  supportSlider = {
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerView: 1.4,
  }
  carSlider = {
    spaceBetween: 8,
    centeredSlides: false,
    slidesPerView: 1.15,
  }
  placeSlider = {
    spaceBetween: 15,
    centeredSlides: false,
    slidesPerView: 1.7,
  }
  ngOnInit() {
    this.imgurl = "../assets/img/home-banner.jpg";
    // this.customer_support_url = "../assests/img/.png";
  }

}

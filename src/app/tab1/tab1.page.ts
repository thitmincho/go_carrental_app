import { Component } from '@angular/core';
import {Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  imgurl:any;
  constructor(private router:Router) {
    
  }  
  supportSlider = {      
    // initialSlide: 1,
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
  }
  carDetail(){
    this.router.navigate(['car-detail']);
  }
  tab2(){
    this.router.navigate(['tab2']);
  }

}

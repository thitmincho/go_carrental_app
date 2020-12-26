import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private routes:Router) { }

  splashSlider = {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1.3,
  }

  home(){
    this.routes.navigateByUrl('tabs');  
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.routes.navigateByUrl('tabs');  
    // }, 5000);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router: Router) {}
  home_tab(){
    this.router.navigate(['tab2']);
  }
  changepassword(){
    this.router.navigate(['changepassword']);
  }
  editprofile(){
    this.router.navigate(['edit-profile']);
  }
  loginRegister(){
    this.router.navigate(['login-register']);
  }

  ngOnInit() {
  }



}

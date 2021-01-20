import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
})
export class ExtraPage implements OnInit {

  constructor(private router:Router) { }

  quantity:number = 1;
  i=1
  plus(){    
      this.i++;
      this.quantity = this.i;    
  }
  minus(){  
    if(this.i !=1) {    
    this.i--;
    this.quantity = this.i;    
    }
  }

  ngOnInit() {
  }

  
  loginSignup(){
    this.router.navigate(['login-register']);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoggedIn=true;
  
  changeTemplate=()=>{
    this.isLoggedIn=!this.isLoggedIn;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from './State/User/user.service';
import { AppState } from './Models/AppState';
import { Store, select } from '@ngrx/store';
import { CartService } from './State/Cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommerce';
  user : any;


  constructor(private router: Router, private dialog: MatDialog,
    private userService:UserService, private store: Store<AppState>, private cartService: CartService) { }



    ngOnInit() {
      if(localStorage.getItem("jwt")) 
      {this.userService.getUserProfile()
      this.cartService.getCart()}
  
      this.store.pipe(select((store)=>store.auth)).subscribe((user)=>{
        this.userService.getUserProfile();
        this.cartService.getCart()
        console.log("store",this.user)
        
      })
    }
}

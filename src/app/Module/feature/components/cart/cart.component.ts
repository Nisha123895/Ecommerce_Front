import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';
import { ProductService } from 'src/app/State/Product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart=[1,1,1];
cartItems : any
item: any;

  constructor(private router: Router, private productService: ProductService,
    private cartService: CartService, private store :  Store<AppState>) { }

  ngOnInit(): void {
    this.cartService.getCart();

    this.store.pipe(select((store)=>store.cart)).subscribe((cart)=>{
      this.cartItems = cart.cartItems;
      console.log('cart data', cart.cartItems)
    }
    );
  }

  navigateToCheckout(){
    this.router.navigate(['checkout'])
  }

}

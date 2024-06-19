import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
//import { HomeComponent } from './Module/feature/home/home.component';
import { FeatureModule } from './Module/feature/feature.module';
// import { MainCarouselComponent } from './Module/feature/home/main-carousel/main-carousel.component';
// import { ProductSliderComponent } from './Module/feature/home/product-slider/product-slider.component';
// import { HomeProductCardComponent } from './Module/feature/home/home-product-card/home-product-card.component';
// import { NavbarComponent } from './Module/shared/navbar/navbar.component';
// import { NavContentComponent } from './Module/shared/navbar/nav-content/nav-content.component';
import { SharedModule } from './Module/shared/shared.module';
import { HomeComponent } from './Module/feature/components/home/home.component';
import { MainCarouselComponent } from './Module/feature/components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './Module/feature/components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './Module/feature/components/home/home-product-card/home-product-card.component';
import { NavbarComponent } from './Module/shared/components/navbar/navbar.component';
import { NavContentComponent } from './Module/shared/components/navbar/nav-content/nav-content.component';
import { FooterComponent } from './Module/shared/components/footer/footer.component';
import { AdminModule } from './Module/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './Module/auth/auth.module';
import { authReducer } from './State/Auth/auth.reducer';
import { userReducer } from './State/User/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { productReducer } from './State/Product/product.reducer';
import { orderReducer } from './State/Order/order.reducer';
import { cartReducer } from './State/Cart/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // MainCarouselComponent,
    // ProductSliderComponent,
    // HomeProductCardComponent,
    // NavbarComponent,
    // NavContentComponent,
    // FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FeatureModule,
    SharedModule,
    AdminModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    StoreModule.forRoot({auth:authReducer,user:userReducer,product:productReducer, order:orderReducer, cart:cartReducer},{}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

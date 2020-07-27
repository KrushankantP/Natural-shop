// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ngx-custom-validators';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';

 // Components.
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductQuantityComponent} from './components/product-quantity/product-quantity.component';

// Service
import {UserService} from './services/user.service';
import {CategoryService} from './services/category.service';
import {ProductService} from './services/product.service';
import {ShoppingCartService} from './services/shopping-cart.service';
import {OrderService} from './services/order.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-gurd.service';
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
})
export class SharedModule { }

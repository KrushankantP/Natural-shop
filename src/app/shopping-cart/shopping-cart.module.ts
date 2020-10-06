import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingCartComponent} from './shopping-cart.component';
import {SharedModule} from '../shared/shared.module';
import {ShoppingCartRoutingModule} from './shopping-cart-routing.module';



@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }

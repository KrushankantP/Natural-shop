import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckOutComponent} from './check-out.component';
import {ShoppingCartSummaryComponent} from './shopping-cart-summary/shopping-cart-summary.component';
import {ShippingFormComponent} from './shipping-form/shipping-form.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CheckOutComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderSuccessComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CheckoutModule { }

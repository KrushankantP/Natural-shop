import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyOrdersComponent} from './my-orders.component';
import {MyOrdersDetailComponent} from './my-orders-detail/my-orders-detail.component';
import {OrdersRoutingModule} from './orders-routing.module';



@NgModule({
  declarations: [
    MyOrdersComponent,
    MyOrdersDetailComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }

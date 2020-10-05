import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyOrdersComponent} from './my-orders.component';
import {MyOrdersDetailComponent} from './my-orders-detail/my-orders-detail.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    MyOrdersComponent,
    MyOrdersDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OrdersModule { }

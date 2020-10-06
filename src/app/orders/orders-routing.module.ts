import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MyOrdersDetailComponent} from './my-orders-detail/my-orders-detail.component';
import {MyOrdersComponent} from './my-orders.component';


const routes: Routes = [
  {path: '', component: MyOrdersComponent},
  { path: ':id', component: MyOrdersDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
})
export class OrdersRoutingModule { }

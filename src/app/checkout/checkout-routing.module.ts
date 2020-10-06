import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckOutComponent} from './check-out.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {AuthGuard} from '../shared/services/auth-gurd.service';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: CheckOutComponent},
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CheckoutRoutingModule { }

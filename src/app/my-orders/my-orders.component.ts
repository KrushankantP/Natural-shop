import { Component} from '@angular/core';
import {Observable} from "rxjs";
import {OrderService} from "../order.service";
import {AuthService} from "../auth.service";
import {switchMap} from "rxjs/operators";



@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent{

  orders$: Observable<any[]>;

  constructor(
    private _authService: AuthService,
    private _orderService: OrderService
  ) {
    this.orders$ = this._authService.user$.pipe(
      switchMap(user => this._orderService.getOrderByUser(user.uid))
    );
  }

}

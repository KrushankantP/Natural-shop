import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders$: Observable<any[]>;

  constructor(private _orderService: OrderService) {
    this.orders$ = this._orderService.getOrders();
  }

  ngOnInit() {}


}

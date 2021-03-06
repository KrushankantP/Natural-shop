import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OrderService} from "../../shared/services/order.service";
import {take} from "rxjs/operators";


@Component({
  selector: 'admin-orders-details',
  templateUrl: './admin-orders-details.component.html',
  styleUrls: ['./admin-orders-details.component.css']
})
export class AdminOrdersDetailsComponent implements OnInit {

  id;
  product$;

  constructor(_route: ActivatedRoute,
              private _orderService: OrderService
  ) {
    this.id = _route.snapshot.paramMap.get('id');
    if(this.id) {
      _orderService.getSingleOrder(this.id)
        .pipe(take(1)).subscribe();
    }
  }

  async ngOnInit(){
    this.product$ = await this._orderService.getSingleOrder(this.id)
      .pipe(take(1));
  }
}

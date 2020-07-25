import { Component} from '@angular/core';
import {ShoppingCart} from "../../../shared/models/shopping-cart";
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent{
  cart$: Observable<ShoppingCart>;

  constructor(private _cartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this._cartService.getCart();
  }
}

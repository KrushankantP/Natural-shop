import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ShoppingCart} from "../../../shared/models/shopping-cart";
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";
import {IProduct} from "../../../shared/models/IProduct";
import {ShoppingCartItem} from "../../../shared/models/shopping-cart-item";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  constructor(private _cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this._cartService.getCart();
  }

  clearCart() {
    this._cartService.clearCart();
  }

  removeItem(item: ShoppingCartItem) {
    this._cartService.removeItem(item);
  }
}

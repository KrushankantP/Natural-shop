import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ShoppingCart} from "../shared/models/shopping-cart";
import {ShoppingCartService} from "../shopping-cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  constructor(private _cartService: ShoppingCartService,
              private _router: Router) { }

  async ngOnInit() {
    this.cart$ = await this._cartService.getCart();
  }

  clearCart() {
    this._cartService.clearCart();
  }

}

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {OrderService} from "../../../shared/services/order.service";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {ShippingAddress} from "../../../shared/models/shipping-address";
import {Order} from "../../../shared/models/order";
import {ShoppingCart} from "../../../shared/models/shopping-cart";


@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  shipping = {} as ShippingAddress;
  userId: string;
  subscription: Subscription;
  @Input('cart') cart: ShoppingCart;

  constructor(
    private _orderService: OrderService,
    private _authService: AuthService,
    private _router: Router
  ) {}

  async ngOnInit() {
    this.subscription = this._authService.user$.subscribe(
      user => (this.userId = user.uid)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this._orderService.placeOrder(order);
    this._router.navigate(['/order-success', result.key]);
  }
}

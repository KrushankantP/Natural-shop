import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from "../shared/models/shopping-cart";
import {IProduct} from "../shared/models/IProduct";
import {ShoppingCartService} from "../shared/services/shopping-cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product: IProduct;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  cart$: Observable<ShoppingCart>;

  constructor(private _cartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this._cartService.getCart();
  }

  addToCart(product: IProduct) {
    this._cartService.addToCart(product);
  }

  removeFromCart(product: IProduct) {
    this._cartService.removeFromCart(product);
  }


}

import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/IProduct";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ShoppingCart} from "../../models/shopping-cart";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private _cartService: ShoppingCartService) {}

  addToCart(product: IProduct) {
    this._cartService.addToCart(product);
  }

  ngOnInit() {
  }
}

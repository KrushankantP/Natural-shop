import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../models/IProduct";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: IProduct;
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: IProduct) {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.cartService.create().then(result => {
        localStorage.setItem('cartId', result.key);

        // Add product to cart
      });
    } else {
      // Add product to cart
    }
  }

  ngOnInit(): void {
  }

}

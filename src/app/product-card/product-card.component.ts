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

    // let cart = this.cartService.getOrCreateCart();
    // this.cartService.addToCart(product);
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../models/IProduct";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: IProduct;
  @Input('show-actions') showActions = true;

  constructor() { }

  ngOnInit(): void {
  }

}

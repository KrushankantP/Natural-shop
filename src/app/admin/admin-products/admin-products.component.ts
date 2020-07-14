import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";

import {IProduct} from "../../models/IProduct";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;

  constructor(private _productService: ProductService) {
    this.products$ = this._productService.getAll()
  }
  ngOnInit(): void {
  }

}

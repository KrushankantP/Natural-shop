import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$;
  constructor(private _productService: ProductService) {
    this.products$ = _productService.getAll();
  }
  ngOnInit(): void {

  }

}

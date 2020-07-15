import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../models/IProduct";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  category: string;

  constructor(private _productService: ProductService,
              private _route: ActivatedRoute) {
     _productService
      .getAllProducts().pipe(switchMap(products => {
       this.products = products;
        return _route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });

  }
  ngOnInit(): void {

  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../models/IProduct";
import {switchMap} from "rxjs/operators";
import {Observable, Subscription} from "rxjs";
import {ShoppingCartService} from "../shopping-cart.service";
import {ShoppingCart} from "../models/shopping-cart";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  category: string;
  filteredProduct: IProduct[] = [];
  cart$: Observable<ShoppingCart>;

  constructor(private _productService: ProductService,
              private _route: ActivatedRoute,
              private _cartService: ShoppingCartService) {
  }

    async ngOnInit() {
      this.cart$ = await this._cartService.getCart();
      this.populateProducts();
    }

    populateProducts() {
      this._productService
        .getAllProducts()
        .pipe(
          switchMap(products => {
            this.products = products;
            return this._route.queryParamMap;
          })
        )
        .subscribe(params => {
          this.category = params.get('category');
          this.applyFilter();
        });
    }

  private applyFilter() {
      this.filteredProduct = this.category
        ? this.products.filter(product => this.category === product.category)
        : this.products;
    }

}

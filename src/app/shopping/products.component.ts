import {Component, OnInit} from '@angular/core';
import{IProduct} from "../shared/models/IProduct";
import {ProductService} from "../shared/services/product.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {ShoppingCartService} from "../shared/services/shopping-cart.service";
import {ShoppingCart} from "../shared/models/shopping-cart";

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

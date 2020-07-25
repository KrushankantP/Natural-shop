import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service"
import {IProduct} from "../../../shared/models/IProduct";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: IProduct[];
  subscription: Subscription;
  filteredProducts: any[];

  constructor(private _productService: ProductService) {

    this.subscription = _productService.getAllProducts()
      .subscribe(products =>
        (this.filteredProducts = this.products= products)
      );
  }

  filter(query: string){
    this.filteredProducts = query ?
      this.products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
      )
      : this.products
  }
  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

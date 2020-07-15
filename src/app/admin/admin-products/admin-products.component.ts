import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../product.service"
import {IProduct} from "../../models/IProduct";
import { Subscription } from "rxjs";
import {DataTableResource} from "angular5-data-table";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: IProduct[];
  tableResource: DataTableResource<IProduct>;
  subscription: Subscription;
  items: IProduct[] = [];
  itemCount: number = 0;

  constructor(private _productService: ProductService) {

    this.subscription = _productService.getAllProducts()
      .subscribe(products => {
        this.products = products
      });
  }

  ngOnInit(): void {
  }
  private initializeTable(products){
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset: 0})
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count)
  }
  reloadItems(params){
    if(!this.tableResource) return

    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products

    this.initializeTable(filteredProducts);
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }
}

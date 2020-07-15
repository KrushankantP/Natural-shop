import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$;
  categories$;
  constructor(private _productService: ProductService,
              private _categoryService: CategoryService) {
    this.products$ = _productService.getAllProducts();
    this.categories$ = _categoryService.getAllCategories();
  }
  ngOnInit(): void {

  }

}

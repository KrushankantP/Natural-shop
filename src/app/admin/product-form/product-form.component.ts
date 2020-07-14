import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../category.service";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(private _categoryService: CategoryService,
              private _productService: ProductService) {
    this.categories$ = _categoryService.getCategories();
  }

  save(product) {
    this._productService.create(product);
  }

  ngOnInit(): void {
  }

}

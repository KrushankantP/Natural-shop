import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../category.service";
import {ProductService} from "../../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id:any
  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _categoryService: CategoryService,
              private _productService: ProductService) {
    this.categories$ = _categoryService.getCategories();

    this.id = this._route.snapshot.paramMap.get('id');

    if (this.id) {
      this._productService.getProduct(this.id).pipe(take(1)).subscribe(p => {
        return this.product = p;
      });
    }
  }

  save(product) {
    if (this.id) this._productService.update(this.id, product);
    else this._productService.create(product);
    this._router.navigate(['/admin/products']);

  }

  ngOnInit(): void {
  }

}

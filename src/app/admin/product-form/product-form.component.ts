import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../category.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(private _categoryService: CategoryService) {
    this.categories$ = _categoryService.getCategories();
  }

  ngOnInit(): void {
  }

}

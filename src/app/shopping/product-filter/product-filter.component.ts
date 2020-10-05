import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../shared/services/category.service";
import {Observable} from "rxjs";

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$ : Observable<any[]>
  @Input('category') category;

  constructor(private _categoryService: CategoryService) {
    this.categories$ = _categoryService.getAllCategories();
  }

  ngOnInit(): void {
  }

}

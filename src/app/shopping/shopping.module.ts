import { NgModule } from '@angular/core';
import {ProductsComponent} from "./products.component";
import {ProductFilterComponent} from "./product-filter/product-filter.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ProductsComponent,
    ProductFilterComponent,
  ],
  imports: [
  SharedModule
  ]
})
export class ShoppingModule { }

import { NgModule } from '@angular/core';
import {ProductsComponent} from "./products.component";
import {ProductFilterComponent} from "./product-filter/product-filter.component";
import {SharedModule} from "../shared/shared.module";
import {ShoppingRoutingModule} from './shopping-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductFilterComponent,
  ],
  imports: [
  SharedModule,
    ShoppingRoutingModule,
  ]
})
export class ShoppingModule { }

import { NgModule } from '@angular/core';
import {AdminProductsComponent} from './components/admin-products/admin-products.component';
import {AdminOrdersComponent} from './components/admin-orders/admin-orders.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {SharedModule} from '../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { AdminOrdersDetailsComponent } from './components/admin-orders/admin-orders-details/admin-orders-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";




@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    AdminOrdersDetailsComponent
  ],
  imports: [
    SharedModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }

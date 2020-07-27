import { NgModule } from '@angular/core';
import {AdminProductsComponent} from './components/admin-products/admin-products.component';
import {AdminOrdersComponent} from './components/admin-orders/admin-orders.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {SharedModule} from '../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';




@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
    imports: [
        SharedModule,
        NgxDatatableModule
    ]
})
export class AdminModule { }

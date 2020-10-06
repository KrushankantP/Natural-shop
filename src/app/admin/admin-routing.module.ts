import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminProductsComponent} from './admin-products/admin-products.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {AuthGuard} from '../shared/services/auth-gurd.service';
import {AdminAuthGuardService} from './services/admin-auth-guard.service';
import {AdminOrdersComponent} from './admin-orders/admin-orders.component';
import {AdminOrdersDetailsComponent} from './admin-orders-details/admin-orders-details.component';


const routes: Routes = [
  {path: 'products', component: AdminProductsComponent},

  { path: 'products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuardService]
  },
  { path: 'products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuardService]
  },
  { path: 'orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuardService]
  },

  { path: 'orders/:id',
    component: AdminOrdersDetailsComponent,
    canActivate: [AuthGuard, AdminAuthGuardService]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }

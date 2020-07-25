import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrderSuccessComponent} from "./order-success/order-success.component";
import {CheckOutComponent} from "./check-out/check-out.component";
import {LoginComponent} from "./login/login.component";
import {AdminProductsComponent} from "./admin/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./admin/admin-orders/admin-orders.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";

import {AuthGuard} from "./shared/services/auth-gurd.service";
import {AdminAuthGuardService} from "./admin-auth-guard.service";
import {ProductFormComponent} from "./admin/product-form/product-form.component";
import {MyOrdersDetailComponent} from "./my-orders/my-orders-detail/my-orders-detail.component";


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  {path: 'my/orders/:id', component: MyOrdersDetailComponent, canActivate: [AuthGuard]},
  { path: 'login', component:LoginComponent},

  { path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuardService]
  },
  { path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuardService]
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuardService]
  },

  { path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

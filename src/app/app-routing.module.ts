import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./shopping/components/products/products.component";
import {ShoppingCartComponent} from "./shopping/components/shopping-cart/shopping-cart.component";
import {OrderSuccessComponent} from "./shopping/components/order-success/order-success.component";
import {CheckOutComponent} from "./shopping/components/check-out/check-out.component";
import {LoginComponent} from "./core/components/login/login.component";
import {AdminProductsComponent} from "./admin/components/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./admin/components/admin-orders/admin-orders.component";
import {MyOrdersComponent} from "./shopping/components/my-orders/my-orders.component";
import {AuthGuard} from "./shared/services/auth-gurd.service";
import {AdminAuthGuardService} from "./admin/services/admin-auth-guard.service";
import {ProductFormComponent} from "./admin/components/product-form/product-form.component";
import {MyOrdersDetailComponent} from "./shopping/components/my-orders/my-orders-detail/my-orders-detail.component";


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'my/orders/:id', component: MyOrdersDetailComponent, canActivate: [AuthGuard]},
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

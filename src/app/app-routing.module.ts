import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./shopping/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrderSuccessComponent} from "./checkout/order-success/order-success.component";
import {CheckOutComponent} from "./checkout/check-out.component";
import {LoginComponent} from "./core/login/login.component";
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminOrdersComponent} from "./admin/admin-orders/admin-orders.component";
import {MyOrdersComponent} from "./orders/my-orders.component";
import {AuthGuard} from "./shared/services/auth-gurd.service";
import {AdminAuthGuardService} from "./admin/services/admin-auth-guard.service";
import {ProductFormComponent} from './admin/product-form/product-form.component';
import {MyOrdersDetailComponent} from "./orders/my-orders-detail/my-orders-detail.component";
import {AdminOrdersDetailsComponent} from "./admin/admin-orders-details/admin-orders-details.component";
import {HomeComponent} from './home/home.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'my/orders/:id', component: MyOrdersDetailComponent},
  { path: 'login', component: LoginComponent},

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
    canActivate: [AuthGuard, AdminAuthGuardService]
  },

  { path: 'admin/orders/:id',
    component: AdminOrdersDetailsComponent,
    canActivate: [AuthGuard, AdminAuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

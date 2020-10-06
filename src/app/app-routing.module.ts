import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {AuthGuard} from "./shared/services/auth-gurd.service";
import {AdminAuthGuardService} from "./admin/services/admin-auth-guard.service";
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products',
    loadChildren:() => import('./shopping/shopping.module')
      .then(mod => mod.ShoppingModule)
  },

  { path: 'shopping-cart',
    loadChildren:() => import('./shopping-cart/shopping-cart.module')
      .then(mod => mod.ShoppingCartModule)
  },

  { path: 'check-out', canActivate: [AuthGuard],
    loadChildren:() => import('./checkout/checkout.module')
          .then(mod => mod.CheckoutModule)
  },

  { path: 'my/orders',  canActivate: [AuthGuard],
    loadChildren:() => import('./orders/orders.module')
      .then(mod => mod.OrdersModule)
  },

  { path: 'login', component: LoginComponent},

  {
    path: 'admin', canActivate: [AuthGuard, AdminAuthGuardService],
    loadChildren:() => import('./admin/admin.module')
      .then(mod => mod.AdminModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

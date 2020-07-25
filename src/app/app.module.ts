import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment";

//Modules
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from "@angular/forms";
import {DataTableModule} from "angular-6-datatable";

//Components
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import {CheckOutComponent} from "./shopping/components/check-out/check-out.component";
import {OrderSuccessComponent} from "./shopping/components/order-success/order-success.component";
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { LoginComponent } from './core/components/login/login.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { ProductFilterComponent } from './shopping/components/products/product-filter/product-filter.component';
import {ProductCardComponent} from './shared/components/product-card/product-card.component'
import { MyOrdersDetailComponent } from './shopping/components/my-orders/my-orders-detail/my-orders-detail.component';
import { ProductQuantityComponent } from './shared/components/product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent} from "./shopping/components/shopping-cart-summary/shopping-cart-summary.component";
import { ShippingFormComponent} from "./shopping/components/shipping-form/shipping-form.component";

// Services
import {AuthService} from "./shared/services/auth.service";
import {AuthGuard} from "./shared/services/auth-gurd.service";
import {UserService} from "./shared/services/user.service";
import {AdminAuthGuardService} from "./admin/services/admin-auth-guard.service";
import {ProductService} from "./shared/services/product.service";
import {CategoryService} from "./shared/services/category.service";
import {ShoppingCartService} from "./shared/services/shopping-cart.service";
import {OrderService} from "./shared/services/order.service";





@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MyOrdersDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    DataTableModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment";

//Modules
import { AngularFireModule } from "@angular/fire";
import {SharedModule} from "./shared/shared.module";

//Components
import { AppComponent } from './app.component';
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
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
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

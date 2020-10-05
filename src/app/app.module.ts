import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment";

//Modules
import { AngularFireModule } from "@angular/fire";
import { AdminModule } from "./admin/admin.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";

//Components
import { AppComponent } from './app.component';

// Services
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {ShoppingCartModule} from './shopping-cart/shopping-cart.module';
import {CheckoutModule} from './checkout/checkout.module';
import {OrdersModule} from './orders/orders.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AdminModule,
    ShoppingModule,
    ShoppingCartModule,
    CheckoutModule,
    OrdersModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    HomeModule,
  ],
  providers: [
    AdminAuthGuardService,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

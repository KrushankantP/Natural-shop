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
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AdminModule,
    ShoppingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AdminAuthGuardService,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

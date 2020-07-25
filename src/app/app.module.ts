import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment";

//Modules
import { AngularFireModule } from "@angular/fire";
import {SharedModule} from "./shared/shared.module";
import {AdminModule} from "./admin/admin.module";
import {ShoppingModule} from "./shopping/shopping.module";
import {CoreModule} from "./core/core.module";

//Components
import { AppComponent } from './app.component';

// Services
import {AdminAuthGuardService} from "./admin/services/admin-auth-guard.service";







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    SharedModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AdminAuthGuardService,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

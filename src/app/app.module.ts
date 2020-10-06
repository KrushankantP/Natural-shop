import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment";

//Modules
import { AngularFireModule } from "@angular/fire";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";

//Components
import { AppComponent } from './app.component';

// Services
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
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

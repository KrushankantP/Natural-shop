import { NgModule } from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {BsNavbarComponent} from './components/bs-navbar/bs-navbar.component';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    BsNavbarComponent,
    LoginComponent
    ],
  imports: [
    SharedModule
  ],
  exports: [BsNavbarComponent]
})
export class CoreModule { }

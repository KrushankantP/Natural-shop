import { NgModule } from '@angular/core';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    BsNavbarComponent,
    LoginComponent
    ],
  imports: [
    SharedModule
  ],
  exports: [BsNavbarComponent]
})
export class CoreModule { }

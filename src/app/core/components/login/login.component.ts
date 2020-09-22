import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _auth: AuthService) {
  }

  loginFacebook() {
    this._auth.fbLogin();
  }

  loginGoogle() {
    this._auth.googleLogin();
  }


}

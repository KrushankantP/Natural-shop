import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Natural-shop';

  constructor(private _userService:UserService,
              private _auth: AuthService,
              private _router: Router)
  {
   this._auth.user$.subscribe(user => {
      if (!user) return;

        this._userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      //this will prevent you from redirecting to home page
      if (!returnUrl) return;

        localStorage.removeItem('returnUrl');
        this._router.navigateByUrl(returnUrl);
    });
  }
}

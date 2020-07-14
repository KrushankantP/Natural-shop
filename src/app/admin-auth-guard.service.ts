import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private _auth:AuthService,
              private _userService: UserService) { }

  canActivate(): Observable<boolean>{
      return this._auth.appUser$
        .pipe(map(appUser => appUser.isAdmin));

   }
}

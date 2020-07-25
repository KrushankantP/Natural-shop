import { Injectable } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Observable} from "rxjs";
import {CanActivate} from "@angular/router";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private _auth:AuthService) { }

  canActivate(): Observable<boolean>{
      return this._auth.appUser$
        .pipe(map(appUser => appUser.isAdmin));

   }
}

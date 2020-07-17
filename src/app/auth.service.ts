import { Injectable } from '@angular/core';
import {Observable,of } from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import {ActivatedRoute} from '@angular/router';
import {UserService} from "./user.service";
import {AppUser} from "./models/app-user";
import * as firebase from "firebase";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.User>;

  constructor(private _afAuth: AngularFireAuth,
              private _route: ActivatedRoute,
              private _userService: UserService) {
    this.user$ = _afAuth.authState;
  }

  login(){
    let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this._afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this._afAuth.signOut();
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
      .pipe(
        switchMap(user => {
        if(user !== null && user !== undefined)
          return this._userService.get(user.uid).valueChanges()

          return of(null)

      }));


  }
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import { ActivatedRoute } from '@angular/router';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.User>;
  constructor(private _afAuth: AngularFireAuth,
              private _route: ActivatedRoute) {
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
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.User>;
  constructor(private _afAuth: AngularFireAuth) {
    this.user$ = _afAuth.authState;
  }

  login(){
    this._afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this._afAuth.signOut();
  }
}

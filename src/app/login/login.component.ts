import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
  }

  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(r => {

    });
  }
}

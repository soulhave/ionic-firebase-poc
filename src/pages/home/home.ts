import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginEmail: string = '';
  loginPassword: string = '';

  signupEmail: string = '';
  signupPassword: string = '';


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(
          userData => {
            console.log('State -->' + userData);
          }
      )
  }

  login(form) {
    console.log(form.value.loginEmail);
    this.afAuth.auth.signInWithEmailAndPassword(form.value.loginEmail, form.value.loginPassword)        
        .then(user => {
          console.log(user);
        }).catch(err => {
          alert(err.message);
        });
  }

  signup(form) {
    this.afAuth.auth.createUserWithEmailAndPassword(form.value.signupEmail, form.value.signupPassword)
        .then(user => {
          console.log(user);
        }).catch(err => {
          alert(err.message);
        });
  }

  logout() {
    this.afAuth.auth.signOut()
        .then(user => {
          console.log(user);
        }).catch(err => {
          alert(err.message);
        });
  }

}

import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../../user/user.model';

// import { first } from 'rxjs/operators';

@Directive({
  selector: '[vexGoogleSignin]'
})
export class GoogleSigninDirective {

  user$: Observable<User>;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  @HostListener('click')
  async onclick() {
    const credential = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return this.updateUserData(credential.user).then((info) => {
      this.router.navigate(['/home']);
    });
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber
    };

    // this.doSomething();

    return userRef.set(data, { merge: true });

  }

  // isLoggedIn() {
  //   return this.afAuth.authState.pipe(first()).toPromise();
  // }

  // async doSomething() {
  //   const user = await this.isLoggedIn();
  //   console.log(!!user);  
  // }

}

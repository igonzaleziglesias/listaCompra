import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {


  constructor(public miauth: AngularFireAuth) {
  }

  user = this.miauth.authState;
  // usuario ya autenticado
  authUser = null;

  login() {
    console.log('login!');
  }
  githublogin() {
    console.log('GitHub login!');
    this.miauth.auth.signInWithPopup( new auth.GithubAuthProvider() )
      .then( user => {
        console.log('user logado: ', user);
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en github login: ', error);
      });
  }
  glogin() {
    console.log('google login!');
    this.miauth.auth.signInWithPopup( new auth.GoogleAuthProvider() )
      .then( user => {
        console.log('user logado: ', user);
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en google login: ', error);
      });
  }


  logout() {
    console.log('logout!');
    this.miauth.auth.signOut();
  }


}

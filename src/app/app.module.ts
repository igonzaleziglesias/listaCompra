import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ListaProductosComponent } from './app.component';
import {environment} from '../environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ListaProductosComponent]
})
export class AppModule { }

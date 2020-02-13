import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListaProductosComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ListaProductosComponent]
})
export class AppModule { }

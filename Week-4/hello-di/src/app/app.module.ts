/*
=======================================
  ; Title: app.module.ts
  ; Author: Richard Krasso
  ; Date: 26 January 2019
  ; Modified By: Wendy Portillo
  ; Description: app.module.ts
========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';

@NgModule({
  declarations: [AppComponent, FruitComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

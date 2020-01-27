/*
=======================================
  ; Title: app.module.ts
  ; Author: Richard Krasso
  ; Date: 26 January 2020
  ; Modified By: Wendy Portillo
  ; Description: app.module.ts
========================================
*/

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
=====================================
  ; Title: app.component.ts
  ; Author: Richard Krasso
  ; Date: 26 January 2020
  ; Modified By: Wendy Portillo
  ; Description: app.component.ts
======================================
*/

import { Component } from '@angular/core';

@Component({
  selector: `app-root`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {
  title = `hello-di`;
}

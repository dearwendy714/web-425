import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ name }}</h1>
  <button (click)="changeName()">Change Name</button>
`,
  styles: [
    `
  h1 {
    color:red;
  }
  `
  ]

})
export class AppComponent {
  title = 'Wendy-one-way-binding';

  //class property
  name: string = "Hello";

  //change name function
  changeName() {
    this.name = "Wendy Portillo";
  }
}

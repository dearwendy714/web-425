import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="container">
  <div class="row">
  <h2>Welcome to the About Page!</h2>
  </div>
  </div>
  <div class="text-center">
  <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png" class="rounded" alt="Angular">
</div>

    <p>
      about works!
    </p>
  `,
  styles: [
    `.container {
      margin-top: 20px;
    }
    h2 {
      color: red;

    }`
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

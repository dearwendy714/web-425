import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Exercise 2.3</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      </div>
    </div>
  </nav>
  <br /><br /><br />
  <div class="text-center">
  <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png" class="rounded" alt="Angular">
</div>



  <div class="container-fluid two-way-form">
    <h2>Two-Way Binding Example</h2><br />
    <div class="form-group">
      <input class="form-control" type="text" placeholder="Enter your name ..." (ngModel)="name">

      <button class="btn btn-outline-danger form-control" (click)="name=''">Clear Name</button>
    </div>
    <div class="form-group">
      <p class="alert alert-dark">Welcome to two-way binding, {{name}}! </p>
    </div>
  </div>
  `,
  styles: [
    `
      .two-way-form {
        width: 46%;
        padding: 5%;
        background-color: #FAFBFD;
      }
      h2 {
        color: #00000;
      }
    `
  ]
})
export class AppComponent {
  title = 'Wendy-two-way-binding';

  // class property
  name: string = "Wendy Portillo";
}

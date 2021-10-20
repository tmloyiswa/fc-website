import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">
      <img src="assets/img/fc-logo.png" width="30" height="30" alt="">
      Full Custom
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" routerLink="/contact">Contact Us</a>
      <a class="nav-item nav-link" routerLink="/gallery">Gallery</a>
    </div>
  </div>
</nav>
<nav class="navbar sticky-top navbar-light bg-light d-flex align-items-center justify-content-center">
  <h3 id="motto"> Home of Exclusive Printing and Signage! </h3>
  <h5> T: 000 000 0000  E:info@fullcustom.co.za</h5>
</nav>
  `,
  styles: [`
  #motto {
  color:#3273dc;

  }
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

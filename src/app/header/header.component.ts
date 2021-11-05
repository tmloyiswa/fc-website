import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
  <a class="navbar-brand" href="#">
      <img src="assets/img/fc-logo.png" width="30" height="30" alt="">
      Full Custom
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" target="_blank" href="https://www.facebook.com/fullcustomZA">Facebook</a>
        <a class="nav-item nav-link" target="_blank" href="https://www.instagram.com/f_u_l_l_custom">Instagram</a>
        <a class="nav-item nav-link" target="_blank" href="https://api.whatsapp.com/send?phone=0843303481">WhatsApp</a>
      </div>

    <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" routerLink="/contact">Contact Us</a>
      <a class="nav-item nav-link" routerLink="/gallery">Gallery</a>
    </div>
  </div>
</nav>
<h2 class="display-6 text-center">Home of Exclusive Printing & Signage!</h2>
  `,
  styles: [`
  .display-6 {
  color:#3273dc;
  padding: 12px;
  background-color: lightblue;

  }
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

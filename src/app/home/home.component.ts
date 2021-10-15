import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<div class="container">
  <div class="row">
    <div class="col d-flex align-items-center justify-content-center">
      <figure class="figure">
      <img src="assets/img/pull-banner.png" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Something that is in a caption section</figcaption>
      </figure>
    </div>
    <div class="col d-flex align-items-center justify-content-center">
      <figure class="figure">
      <img src="assets/img/pull-banner.png" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Something that is in a caption section</figcaption>
      </figure>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col d-flex align-items-center justify-content-center">
      <figure class="figure">
      <img src="assets/img/pull-banner.png" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Something that is in a caption section</figcaption>
      </figure>
    </div>
    <div class="col d-flex align-items-center justify-content-center">
      <figure class="figure">
      <img src="assets/img/pull-banner.png" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Something that is in a caption section</figcaption>
      </figure>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col d-flex align-items-center justify-content-center">
      <figure class="figure">
      <img src="assets/img/pull-banner.png" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Something that is in a caption section</figcaption>
      </figure>
    </div>
    <div class="col d-flex align-items-center justify-content-center">
      <figure class="figure">
      <img src="assets/img/pull-banner.png" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Something that is in a caption section</figcaption>
      </figure>
    </div>
  </div>
</div>
  `,
  styles: [`
        img {
          height: 216px !important;
          width: 190px !important;
        }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

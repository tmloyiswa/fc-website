import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<div class="container overflow-hidden">
  <div class="row row-margin-05">
    <div class="col d-flex align-items-center justify-content-center">
    <div class="col d-flex inside align-items-center justify-content-center" routerLink="/large-format">
      <figure class="figure text-center">
      <h5>Large Format Printing</h5>
      <img src="assets/img/pull-banner.png" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Pull Up Banners, Viynl Printing & Cut, PVC etc</figcaption>
      </figure>
      <span>View More</span>
    </div>
    </div>
    <div class="col d-flex align-items-center justify-content-center">
    <div class="col d-flex inside align-items-center justify-content-center" routerLink="/corporate-branding">
      <figure class="figure text-center">
      <h5>Corporate Branding</h5>
      <img src="assets/img/tshirts.jpg" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">T-Shirt Printing, Caps, Mugs, Office Branding etc</figcaption>
      </figure>
      <span>View More</span>
    </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row row-margin-05">
    <div class="col d-flex align-items-center justify-content-center">
    <div class="col d-flex inside align-items-center justify-content-center" routerLink="/promotional-products">
      <figure class="figure text-center">
      <h5>Promotional Products</h5>
      <img src="assets/img/resize flyer.jpg" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Flyers, Posters, Product Stickers etc</figcaption>
      </figure>
      <span>View More</span>
    </div>
    </div>
    <div class="col d-flex align-items-center justify-content-center">
    <div class="col d-flex inside align-items-center justify-content-center" routerLink="/corporate-stationery">
      <figure class="figure text-center">
      <h5>Corporate Stationery</h5>
      <img src="assets/img/NCR-Books-removebg-preview.png" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Invoice Books, Receipt Books, Business Cards etc</figcaption>
      </figure>
      <span>View More</span>
    </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row row-margin-05">
    <div class="col d-flex align-items-center justify-content-center">
    <div class="col d-flex inside align-items-center justify-content-center" routerLink="/vehicle-branding">
      <figure class="figure text-center">
      <h5>Vehicle Branding</h5>
      <img src="assets/img/Car-magnets-1-removebg-preview-1.jpg" class="figure-img car img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Full Wrap, Magnetic Stickers, Lettering, etc</figcaption>
      </figure>
      <span>View More</span>
    </div>
    </div>
    <div class="col d-flex align-items-center justify-content-center">
    <div class="col d-flex inside align-items-center justify-content-center" routerLink="/toners-refill">
      <figure class="figure text-center">
      <h5>Toners & Refill Inks</h5>
      <img src="assets/img/toners-resize.jpg" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Toner Refill Inks and Toner Catridges..</figcaption>
      </figure>
      <span>View More</span>
    </div>
    </div>
  </div>
</div>

  `,
  styles: [`
        img {
          height: 216px !important;
          width: 190px !important;
        }

        .col {
        background: lightblue;
        padding: 1rem !important;
        }

        .row {
           margin-right: 60px;
           margin-left: 60px;
        }

        .row-margin-05 {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        }

        img.car {
            width: 240px !important;
            height: 112px !important;
            margin-top: 42px;
            margin-bottom: 45px;
              }

        .inside {
        background: white;
        cursor: pointer;
        position: relative;
        border-radius: 12px;
        }

        .inside span {
                position: absolute;
                bottom: 0;
                top: 0;
                left: 0;
                right: 0;
                background: rgb(0, 0, 0);
                background: rgba(0, 0, 0, 0.4); /* Black see-through */
                color: #f1f1f1;
                transition: 0.5s ease;
                opacity: 0;
                font-size: 20px;
                padding: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 12px;
              }

        .inside:hover span {
        opacity: 1;
        }

        div.footer-dark {
        margin-top: 1rem !important;
        }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

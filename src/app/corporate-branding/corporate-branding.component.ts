import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-branding',
  template: `
    <div class="container">
              <div class="row top">
                <div class="col heading align-self-start">
                  <h4 class="title">Corporate Brand Promotional Products...</h4>
             <p class="subtitle">
                We are specialists in branding of any type of work wear, with a variety of best print types that comes in different sizes
                that suits any corporate wear, with as little cost, as possible.

                  Effective corporate branding defines a business’s personality. Standing out in a crowded marketplace is a business requirement for increased sales,
                  profits and success. A basic tenant of marketing is the establishment of a brand identity for products and services.
             </p>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row product">
                <div class="col-4">
                <img src="assets/img/shirts.png" class="img-thumbnail" alt="...">
                </div>
                <div class="col-8">
                    <h5>Branded Work Uniforms</h5>
                    <h6>PRINT SIZES</h6>
                    <li>Pocket Size</li>
                    <li>A4 Size</li>
                    <li>A3 Size</li>
                    <li>“Turn your team into walking billboards, in style.”</li>
                </div>
              </div>

              <div class="row product">
                  <div class="col-4">
                  <img src="assets/img/reflective.png" class="img-thumbnail" alt="...">
                  </div>
                  <div class="col-8">
                      <h5>Branded Work Suits</h5>
                      <h6>PRINT SIZES</h6>
                      <li>Pocket Size</li>
                      <li>A4 Size</li>
                      <li>A3 Size</li>
                      <li>“Turn your team into walking billboards, in style.”</li>
                  </div>
                </div>

                  <div class="row product bottom">
                      <div class="col-4">
                      <img src="assets/img/sports.png" class="img-thumbnail" alt="...">
                      </div>
                      <div class="col-8">
                       <h5>Branded Sportswear</h5>
                                            <h6>PRINT SIZES</h6>
                                            <li>Pocket Size</li>
                                            <li>A4 Size</li>
                                            <li>A3 Size</li>
                                            <li>“Turn your team into walking billboards, in style.”</li>

                      </div>
                    </div>
            </div>
  `,
  styles: [
  ]
})
export class CorporateBrandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

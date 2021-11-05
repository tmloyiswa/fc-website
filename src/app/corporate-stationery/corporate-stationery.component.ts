import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-stationery',
  template: `
  <div class="container">
            <div class="row top">
              <div class="col heading align-self-start">
                <h4 class="title">Corporate Stationery...</h4>
                <p class="subtitle">
                There are many advantages attached to ordering personalized stationery for your business. Personalized
                      stationery featuring your branding can play a pivotal role in enhancing awareness for your products and services,
                      ensuring your company lingers in minds for a long period of time.
                            </p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row product">
              <div class="col-4">
              <img src="assets/img/ncr.jpeg" class="img-thumbnail" alt="...">
              </div>
              <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
            </div>

            <div class="row product">
                <div class="col-4">
                <img src="assets/img/invoice-book.png" class="img-thumbnail" alt="...">
                </div>
                <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
              </div>

                <div class="row product bottom">
                    <div class="col-4">
                    <img src="assets/img/env.jpg" class="img-thumbnail" alt="...">
                    </div>
                    <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
                  </div>
          </div>
  `,
  styles: [
  ]
})
export class CorporateStationeryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

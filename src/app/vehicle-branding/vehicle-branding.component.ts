import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-branding',
  template: `
      <div class="container">
          <div class="row top">
            <div class="col heading align-self-start">
              <h4 class="title">Vehicle Branding...</h4>
              <p class="subtitle">
               Endorsing your business through custom vehicle signage is an established method of positive promotion.
                     Vehicle signage is great because it never turns off. Everywhere you go, you will be promoting your brand. Even when your vehicle is parked
                          </p>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row product">
            <div class="col-4">
            <img src="assets/img/magnetic.jpeg" class="img-thumbnail" alt="...">
            </div>
            <div class="col-8">
                <h5>CAR MAGNETIC STICKERS</h5>
                <li>500MM X 300MM SET</li>
                <li>600MM X 400MM SET</li>
                <li>Complete set for left and right door, with full color print and installation.</li>

            </div>
          </div>

              <div class="row product bottom">
                  <div class="col-4">
                  <img src="assets/img/vinyl.png" class="img-thumbnail" alt="...">
                  </div>
                  <div class="col-8">
                      <h5>VINYL CUTOUTS</h5>
                      <li>Semi Wrap</li>
                      <li>Lettering, ETC</li>
                      <li>Multi colors available.</li>
                  </div>
                </div>
        </div>

  `,
  styles: [
  ]
})
export class VehicleBrandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

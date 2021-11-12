import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-format',
  template: `
    <div class="container">
      <div class="row top">
        <div class="col heading align-self-start">
          <h4 class="title">Large Format Printing...</h4>
          <p class="subtitle">
                        When you need an oversized graphics display for a meeting, trade
                        show, storefront, special event – and so on – you’re moving into
                        large-format printing territory. Think banners, vinyl printing
                        (white, Clear), signage boards (ABS, CORREX, CHROMADEC),
                        Contravision, Sandblast/Frosted vinyl (printable/cutouts)
                      </p>
        </div>
      </div>
     </div>


<div class="container">
  <div class="row product">
    <div class="col-4">
    <img src="assets/img/banners.jpeg" class="img-thumbnail" alt="...">
    </div>
    <div class="col-8">

    <p>
    Have instant impact at any event with <strong>Pull up/ Roll up</strong> banners. They are easily transported and can be erected and lowered in minutes.
    They are compact and durable and once lowered can be stored with ease. A padded carrier bag comes standard with each banner.
    </p>
    <h5>PULL-UP BANNERS</h5>
    <h6>STANDARD SIZE: 850MM X 2000MM</h6>
    <li>EXECUTIVE</li>
    <li>ECONOMY</li>
    <li>DELUXE</li>
    <li>High quality full color digital printing.</li>

    </div>
  </div>

  <div class="row product">
      <div class="col-4">
      <img src="assets/img/largefc.jpeg" class="img-thumbnail" alt="...">
      </div>
      <div class="col-8">

      <h5>VINYL/PVC PRINTING</h5>
      <li>Per Square metre</li>
      <h6>ANY CUSTOMISED SIZES</h6>
      <li>Custom Wall Banners</li>
      <li>A0, A1</li>
      <li>A2, A3</li>
      <li>A4, A5, ETC</li>
      <p>High quality full color digital printing.</p>
      </div>
    </div>

    <div class="row product">
        <div class="col-4">
        <img src="assets/img/correx.png" class="img-thumbnail" alt="...">
        </div>
        <div class="col-8">
        <h5>CORREX BOARDS</h5>
        <h6>ANY CUSTOMISED SIZES</h6>
        <li>A0, A1</li>
        <li>A2, A3</li>
        <li>A4, A5, ETC</li>
        <p>For all your indoor & outdoor advertising. High quality full color digital printing.</p>
        </div>
      </div>

      <div class="row product bottom">
          <div class="col-4">
          <img src="assets/img/ABS.png" class="img-thumbnail" alt="...">
          </div>
          <div class="col-8">
          <h5>CHROMADEC BOARDS</h5>
          <h6>ANY CUSTOMISED SIZES</h6>
          <li>A0, A1</li>
          <li>A2, A3</li>
          <li>A4, A5, ETC</li>
          <p>For all your outdoor advertising. High quality full color digital printing.</p>
          </div>
        </div>
</div>
  `,
  styles: [`

  `
  ]
})
export class LargeFormatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

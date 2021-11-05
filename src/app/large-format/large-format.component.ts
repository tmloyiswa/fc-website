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
    <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>

  <div class="row product">
      <div class="col-4">
      <img src="assets/img/largefc.jpeg" class="img-thumbnail" alt="...">
      </div>
      <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
    </div>

    <div class="row product">
        <div class="col-4">
        <img src="assets/img/correx.png" class="img-thumbnail" alt="...">
        </div>
        <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
      </div>

      <div class="row product bottom">
          <div class="col-4">
          <img src="assets/img/ABS.png" class="img-thumbnail" alt="...">
          </div>
          <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
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

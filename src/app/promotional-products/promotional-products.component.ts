import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotional-products',
  template: `
    <div class="container">
        <div class="row top">
          <div class="col heading align-self-start">
            <h4 class="title">Promotional Products...</h4>
            <p class="subtitle">
                          Promotional products bring strong client retention and loyalty to a brand. They help give the brand more personality.
                          Promotional products can be lead generators that increase sales.
                        </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row product">
          <div class="col-4">
          <img src="assets/img/flyersfc.jpeg" class="img-thumbnail" alt="...">
          </div>
          <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
        </div>

        <div class="row product">
            <div class="col-4">
            <img src="assets/img/calendar-trimmed.jpg" class="img-thumbnail" alt="...">
            </div>
            <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
          </div>

            <div class="row product bottom">
                <div class="col-4">
                <img src="assets/img/mugsfc.jpeg" class="img-thumbnail" alt="...">
                </div>
                <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
              </div>
      </div>

  `,
  styles: [
  ]
})
export class PromotionalProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

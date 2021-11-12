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
          <div class="col-8">

          <p>
              <strong>Promote sales, special offers, events and more.</strong> A flyer should include a clear, enticing message and design that grabs the attention of a potential customer.
              With Full Custom, you get many years of experience to help you promote your products and your brand. We print on all paper stocks.
              </p>
              <h5>FLYERS</h5>

              <li>A6 FLYERS</li>
              <li>A5 FLYERS</li>
              <li>A4 FLYERS</li>
              <li>FULL COLOUR PRINT SINGLE SIDED</li>
              <li>FULL COLOUR PRINT DOUBLE SIDED</li>

               <p>Comes in full color or monochrome, on 125gsm gloss paper. All quantities available.</p>
          </div>
        </div>

        <div class="row product">
            <div class="col-4">
            <img src="assets/img/calendar-trimmed.jpg" class="img-thumbnail" alt="...">
            </div>
            <div class="col-8">

                          <h5>CALENDARS</h5>

                          <li>ANY CUSTOMISED SIZES</li>
                          <li>A0, A1</li>
                          <li>A2, A3</li>
                          <li>A4, A5, ETC</li>
                          <li>Wall, Desktop</li>
            </div>
          </div>

            <div class="row product bottom">
                <div class="col-4">
                <img src="assets/img/mugsfc.jpeg" class="img-thumbnail" alt="...">
                </div>
                <div class="col-8">
                <p>Our mugs are perfect for loved ones, birthdays, anniversaries , brand promotion and more. Get your mugs printed at <strong>FULL CUSTOM</strong> today.</p>
                <h5>MUG PRINTING</h5>
                <li>ANY TYPE OF MUGS</li>
                <li>Magic Mugs</li>
                <li>Froasted Mugs</li>
                <li>Neon Mugs</li>
                <li>Plain White, ETC</li>
                <li>Let us create your lasting memory...</li>

                </div>
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

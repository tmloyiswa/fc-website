import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toners-refill',
  template: `
    <div class="container">
        <div class="row top">
          <div class="col heading align-self-start">
            <h4 class="title">Toners & Refill Ink...</h4>
            <p class="subtitle">
                          Original Toners, Generic ones and Original Refill Inks.
                          Refilling cartridges is a great option that helps you with double benefits – you help save the environment & you save on costs!
                          However, you should only get your inks refilled at trusted shops, or you risk damaging your printer.
                        </p>
          </div>
        </div>
      </div>


       <div class="container">
         <div class="row product">
           <div class="col-4">
           <img src="assets/img/black_toner.png" class="img-thumbnail" alt="...">
           </div>
           <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
         </div>

             <div class="row product bottom">
                 <div class="col-4">
                 <img src="assets/img/ink.jpg" class="img-thumbnail" alt="...">
                 </div>
                 <div class="col-8">.col-6<br>Subsequent columns continue along the new line.</div>
               </div>
       </div>
  `,
  styles: [
  ]
})
export class TonersRefillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

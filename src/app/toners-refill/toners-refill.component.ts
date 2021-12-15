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
           <div class="col-8">
               <h5>Toner Cartridges in Stock.</h5>
               <h6>TONER CARTRIDGES IN STOCK</h6>
               <li>LASERJET</li>
               <li>KYOCERA MITA</li>
               <li>TASKALFA</li>
               <li>SAMSUNG</li>
               <li>Original toners and refill inks.</li>
           </div>
         </div>

             <div class="row product bottom">
                 <div class="col-4">
                 <img src="assets/img/ink.jpg" class="img-thumbnail" alt="...">
                 </div>
                 <div class="col-8">
                             <h5>Laboratory tested Refill Inks.</h5>
                                <h6>REFILL INKS (250G Bottles)</h6>
                                <li>HP</li>
                                <li>SAMSUNG</li>
                                <li>CANON</li>
                                <li>Complete set with full color print, assembled with carrier bag.</li>

                 </div>
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a routerLink="/large-format">Large Format Printing</a></li>
                            <li><a routerLink="/corporate-branding">Corporate Branding</a></li>
                            <li><a routerLink="/corporate-stationery">Corporate Stationery</a></li>
                            <li><a routerLink="/promotional-products">Promotional Products</a></li>
                            <li><a routerLink="/vehicle-branding">Vehicle Branding</a></li>
                            <li><a routerLink="/toners-refill">Toner Refill Inks</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a routerLink="/">Company</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Full Custom</h3>
                        <strong>Full Custom Pty Ltd</strong> The companies’ line of business
                                    includes Corporate Branding, Corporate Stationery Printing, Web
                                    Designing, Printing and Graphic Designing. Our customer
                                    base includes numerous private, domestic and industrial clients.
                    </div>
                    <div class="col item social">
                    <a target="_blank" href="https://www.facebook.com/fullcustomZA"><i class="fab fa-facebook"></i></a>
                    <a target="_blank" href="https://www.twitter.com/fullcustomZA"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://www.instagram.com/f_u_l_l_custom"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=0843303481"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <p class="copyright"><strong>Full Custom &#169; {{c_year}} by Full Custom</strong></p>
            </div>
        </footer>
    </div>
  `,
  styles: [`

    .footer-dark {
      padding:50px 0;
      color:#f0f9ff;
      background-color:#282d32;
    }

    .footer-dark h3 {
      margin-top:0;
      margin-bottom:12px;
      font-weight:bold;
      font-size:16px;
    }

    .footer-dark ul {
      padding:0;
      list-style:none;
      line-height:1.6;
      font-size:14px;
      margin-bottom:0;
    }

    .footer-dark ul a {
      color:inherit;
      text-decoration:none;
      opacity:0.6;
    }

    .footer-dark ul a:hover {
      opacity:0.8;
    }

    @media (max-width:767px) {
      .footer-dark .item:not(.social) {
        text-align:center;
        padding-bottom:20px;
      }
    }

    .footer-dark .item.text {
      margin-bottom:36px;
    }

    @media (max-width:767px) {
      .footer-dark .item.text {
        margin-bottom:0;
      }
    }

    .footer-dark .item.text p {
      opacity:0.6;
      margin-bottom:0;
    }

    .footer-dark .item.social {
      text-align:center;
    }

    @media (max-width:991px) {
      .footer-dark .item.social {
        text-align:center;
        margin-top:20px;
      }
    }

    .footer-dark .item.social > a {
      font-size:20px;
      width:36px;
      height:36px;
      line-height:36px;
      display:inline-block;
      text-align:center;
      border-radius:50%;
      box-shadow:0 0 0 1px rgba(255,255,255,0.4);
      margin:0 8px;
      color:#fff;
      opacity:0.75;
    }

    .footer-dark .item.social > a:hover {
      opacity:0.9;
    }

    .footer-dark .copyright {
      text-align:center;
      padding-top:24px;
      opacity:0.3;
      font-size:13px;
      margin-bottom:0;
    }
  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  c_year: number = new Date().getFullYear();

}

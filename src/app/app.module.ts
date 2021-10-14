import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LargeFormatComponent } from './large-format/large-format.component';
import { FooterComponent } from './footer/footer.component';
import { VehicleBrandingComponent } from './vehicle-branding/vehicle-branding.component';
import { TonersRefillComponent } from './toners-refill/toners-refill.component';
import { PromotionalProductsComponent } from './promotional-products/promotional-products.component';
import { CorporateStationeryComponent } from './corporate-stationery/corporate-stationery.component';
import { CorporateBrandingComponent } from './corporate-branding/corporate-branding.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LargeFormatComponent,
    FooterComponent,
    VehicleBrandingComponent,
    TonersRefillComponent,
    PromotionalProductsComponent,
    CorporateStationeryComponent,
    CorporateBrandingComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

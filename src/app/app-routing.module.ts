import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LargeFormatComponent } from './large-format/large-format.component';
import { VehicleBrandingComponent } from './vehicle-branding/vehicle-branding.component';
import { TonersRefillComponent } from './toners-refill/toners-refill.component';
import { CorporateStationeryComponent } from './corporate-stationery/corporate-stationery.component';
import { PromotionalProductsComponent } from './promotional-products/promotional-products.component';
import { CorporateBrandingComponent } from './corporate-branding/corporate-branding.component';

const routes: Routes = [
  {
    path: '',
        component: HomeComponent,
        pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
{
  path: 'gallery',
  component: GalleryComponent
},
{
  path: 'large-format',
  component: LargeFormatComponent
},
{
  path: 'corporate-branding',
  component: CorporateBrandingComponent
},
{
  path: 'vehicle-branding',
  component: VehicleBrandingComponent
},
{
  path: 'toners-refill',
  component: TonersRefillComponent
},
{
  path: 'corporate-stationery',
  component: CorporateStationeryComponent
},
{
  path: 'promotional-products',
  component: PromotionalProductsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HeroComponent } from './sections/hero/hero.component';
import { BestsellersComponent } from './sections/bestsellers/bestsellers.component';
import { CertificatesComponent } from './sections/certificates/certificates.component';
import { ProductsSwiperComponent } from './sections/products-swiper/products-swiper.component';
import { ReviewsComponent } from './sections/reviews/reviews.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { ShippingPageComponent } from './pages/shipping/shipping-page.component';
import { FaqPageComponent } from './pages/faq/faq-page.component';
import { PoliciesPageComponent } from './pages/policies/policies-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    BestsellersComponent,
    CertificatesComponent,
    ProductsSwiperComponent,
    ReviewsComponent,
    FooterComponent,
    ButtonComponent,
    HomePageComponent,
    ShippingPageComponent,
    FaqPageComponent,
    PoliciesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule, MatMenuModule,
    RouterModule.forRoot([
      // { path: '', component: ProductListComponent },
      // { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { AboutUsPageComponent } from './pages/about/about-us-page.component';
import { ShippingPageComponent } from './pages/shipping/shipping-page.component';
import { FaqPageComponent } from './pages/faq/faq-page.component';
import { PoliciesPageComponent } from './pages/policies/policies-page.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { GuaranteeComponent } from './sections/guarantee/guarantee.component';
import { PrivacyComponent } from './sections/privacy/privacy.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { ShippingComponent } from './sections/shipping/shipping.component';

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
    AboutUsPageComponent,
    ShippingPageComponent,
    FaqPageComponent,
    PoliciesPageComponent,
    BenefitsComponent,
    GuaranteeComponent,
    PrivacyComponent,
    AboutUsComponent,
    ShippingComponent
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

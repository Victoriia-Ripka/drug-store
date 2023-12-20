import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  HeroComponent,
  BestsellersComponent,
  CertificatesComponent,
  ProductsSwiperComponent,
  ReviewsComponent,
  FooterComponent,
  ProductsComponent,
  BenefitsComponent,
  GuaranteeComponent,
  PrivacyComponent,
  AboutUsComponent,
  ShippingComponent,
  PoliciesComponent,
  ShippingFaqComponent,
  OrderingFaqComponent,
  ProductsFaqComponent,
  ContactusComponent
} from 'src/app/sections/index'
import {
  ButtonComponent,
  QuestionItemComponent
} from 'src/app/components/index';
import {
  HomePageComponent,
  AboutUsPageComponent,
  ShippingPageComponent,
  FaqPageComponent,
  ProductsPageComponent,
  PoliciesPageComponent,
  ContactusPageComponent
} from 'src/app/pages/index';
import { ProductCardComponent } from './components/product-card/product-card.component'

@NgModule({
  declarations: [
    ShippingFaqComponent,
    OrderingFaqComponent,
    ProductsFaqComponent,
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
    ShippingComponent,
    PoliciesComponent,
    QuestionItemComponent,
    ContactusComponent,
    ContactusPageComponent,
    ProductsComponent,
    ProductsPageComponent,
    ProductCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

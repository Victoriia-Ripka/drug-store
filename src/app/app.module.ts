import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

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
  ContactusComponent,
  ProductComponent,
  TrackOrderComponent,
  OrdersComponent,
  AddressesComponent,
  AccountDetailsComponent,
  LogoutComponent,
  ShoppingCartModalComponent,
  ShoppingInforationComponent,
  LoginModalComponent
} from 'src/app/sections/index'
import {
  ButtonComponent,
  QuestionItemComponent,
  ProductCardComponent
} from 'src/app/components/index';
import {
  HomePageComponent,
  AboutUsPageComponent,
  ShippingPageComponent,
  FaqPageComponent,
  ProductsPageComponent,
  PoliciesPageComponent,
  ContactusPageComponent,
  ProductPageComponent,
  AccountPageComponent,
  ShoppingCartPageComponent
} from 'src/app/pages/index';

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
    ProductPageComponent,
    ProductComponent,
    AccountPageComponent,
    TrackOrderComponent,
    OrdersComponent,
    AddressesComponent,
    AccountDetailsComponent,
    LogoutComponent,
    ShoppingCartModalComponent,
    ShoppingCartPageComponent,
    ShoppingInforationComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Routes } from "@angular/router";

import { HomePageComponent } from "./home/home-page.component";
import { AboutUsPageComponent } from "./about/about-us-page.component";
import { ShippingPageComponent } from "./shipping/shipping-page.component";
import { FaqPageComponent } from "./faq/faq-page.component";
import { PoliciesPageComponent } from "./policies/policies-page.component";
import { ContactusComponent } from "../sections/contactus/contactus.component";

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about-us',
        title: 'About us - Canadian Drug Store',
        component: AboutUsPageComponent
    },
    {
        path: 'shipping',
        title: 'Shipping - Canadian Drug Store',
        component: ShippingPageComponent
    },
    {
        path: 'faq',
        title: 'FAQ - Canadian Drug Store',
        component: FaqPageComponent
    },
    {
        path: 'policies',
        title: 'Policies - Canadian Drug Store',
        component: PoliciesPageComponent
    },
    {
        path: 'contact-us',
        title: 'Contact us - Canadian Drug Store',
        component: ContactusComponent
    },
]
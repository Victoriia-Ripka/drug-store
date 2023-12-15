import { Routes } from "@angular/router";

import { HomePageComponent } from "./home/home-page.component";
import { AboutUsPageComponent } from "./about/about-us-page.component";
import { ShippingPageComponent } from "./shipping/shipping-page.component";
import { FaqPageComponent } from "./faq/faq-page.component";
import { PoliciesPageComponent } from "./policies/policies-page.component";

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about-us',
        component: AboutUsPageComponent
    },
    {
        path: 'shipping',
        component: ShippingPageComponent
    },
    {
        path: 'faq',
        component: FaqPageComponent
    },
    {
        path: 'policies',
        component: PoliciesPageComponent
    },
]
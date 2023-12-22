import { Routes } from "@angular/router";

import {
    HomePageComponent,
    AboutUsPageComponent,
    ShippingPageComponent,
    FaqPageComponent,
    PoliciesPageComponent,
    ContactusPageComponent,
    ProductsPageComponent,
    ProductPageComponent
} from "./index";

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
        component: ContactusPageComponent
    },
    {
        path: 'products',
        title: 'All Products - Canadian Drug Store',
        component: ProductsPageComponent
    },
    {
        path: 'products/:id',
        title: 'Product - Canadian Drug Store',
        component: ProductPageComponent
    },
]
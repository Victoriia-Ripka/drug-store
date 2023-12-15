import { Routes } from "@angular/router";

import { HomePageComponent } from "./home/home-page.component";

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about-us',
        component: HomePageComponent
    },
    {
        path: 'shipping',
        component: HomePageComponent
    },
]
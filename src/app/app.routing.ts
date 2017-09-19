import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'sale',
    loadChildren: './sale/sale.module#SaleModule'
  },
  {
    path: 'home',
    component: HomeComponent
  },
];


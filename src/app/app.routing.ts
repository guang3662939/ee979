import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sale',
    loadChildren: './sale/sale.module#SaleModule'
  },
  {
    path: 'personal',
    loadChildren: './personal/personal.module#PersonalModule'
  },
  {
    path: 'buy',
    loadChildren: './buy/buy.module#BuyModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];


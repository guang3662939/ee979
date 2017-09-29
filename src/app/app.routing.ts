import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sale',
    loadChildren: './modules/sale/sale.module#SaleModule'
  },
  {
    path: 'personal',
    loadChildren: './modules/personal/personal.module#PersonalModule'
  },
  {
    path: 'buy',
    loadChildren: './modules/buy/buy.module#BuyModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];


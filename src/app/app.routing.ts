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
    path: 'test1',
    redirectTo: '/sale'
  },
  {
    path: 'test2',
    redirectTo: '/'
  },
  {
    path: 'test3',
    redirectTo: '/sale'
  },
  {
    path: 'test4',
    redirectTo: '/'
  },
  {
    path: 'test5',
    redirectTo: '/sale'
  },
  {
    path: 'test6',
    redirectTo: '/'
  },
  {
    path: 'test7',
    redirectTo: '/sale'
  },
  {
    path: 'test8',
    redirectTo: '/'
  },
  {
    path: 'test9',
    redirectTo: '/sale'
  },
];


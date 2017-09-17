import { Routes } from '@angular/router';

import { ToSaleComponent } from './tosale/to-sale.component';
import { LoginComponent } from './login/login.component';
import { Login0Component } from './login0/login.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/sale',
    pathMatch: 'full'
  },
  {
    path: 'sale',
    component: ToSaleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login0',
    component: Login0Component
  }
];


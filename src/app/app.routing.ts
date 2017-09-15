import { Routes } from '@angular/router';

import { ToSaleComponent } from './tosale/to-sale.component';
import { LoginComponent } from './login/login.component';

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
  }
];


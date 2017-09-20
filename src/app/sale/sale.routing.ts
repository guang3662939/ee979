import { Routes } from '@angular/router';

import { AuthGuard } from '../services/auth-guard.service';
import { CanDeactivateGuard } from '../services/can-deactivate-guard.service';

import { AccountInfoComponent } from './account-info/account-info.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SaleComponent } from './sale.component';
import { SaleResultComponent } from './sale-result/sale-result.component';
import { ToSaleComponent } from './to-sale/to-sale.component';

export const saleRoutes: Routes = [{
  path: '',
  component: SaleComponent,
  children: [
    {
      path: '',
      component: ToSaleComponent
    },
    {
      path: 'product',
      component: ProductInfoComponent,
      canActivate: [AuthGuard],
      canDeactivate: [CanDeactivateGuard]
    },
    {
      path: 'account',
      component: AccountInfoComponent,
      canActivate: [AuthGuard],
      canDeactivate: [CanDeactivateGuard]
    },
    {
      path: 'result',
      component: SaleResultComponent
    }
  ]
}];
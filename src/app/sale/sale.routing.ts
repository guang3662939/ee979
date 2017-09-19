import { Routes } from '@angular/router';

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
      component: ProductInfoComponent
    },
    {
      path: 'account',
      component: AccountInfoComponent
    },
    {
      path: 'result',
      component: SaleResultComponent
    }
  ]
}];
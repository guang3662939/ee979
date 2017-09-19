import { Routes } from '@angular/router';

import { ProductInfoComponent } from './product-info/product-info.component';
import { ToSaleComponent } from './to-sale/to-sale.component';

export const saleRoutes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: ToSaleComponent
    },
    {
      path: 'info',
      component: ProductInfoComponent
    }
  ]
}];
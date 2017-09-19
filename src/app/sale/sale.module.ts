import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { saleRoutes } from './sale.routing';

// components
import { ProductInfoComponent } from './product-info/product-info.component';
import { ToSaleComponent } from './to-sale/to-sale.component';

@NgModule({
  declarations: [
    ProductInfoComponent,
    ToSaleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(saleRoutes)
  ]
})

export class SaleModule {}
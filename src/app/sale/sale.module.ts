import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { saleRoutes } from './sale.routing';

// components
import { AccountInfoComponent } from './account-info/account-info.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SaleComponent } from './sale.component';
import { SaleResultComponent } from './sale-result/sale-result.component';
import { ToSaleComponent } from './to-sale/to-sale.component';

@NgModule({
  declarations: [
    AccountInfoComponent,
    ProductInfoComponent,
    SaleComponent,
    SaleResultComponent,
    ToSaleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(saleRoutes),
    SharedModule
  ]
})

export class SaleModule {}
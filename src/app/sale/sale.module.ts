import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { saleRoutes } from './sale.routing';
import { FileUploadModule } from 'ng2-file-upload/';

import { SaleService } from './sale.service';

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
    FileUploadModule,
    RouterModule.forChild(saleRoutes),
    SharedModule
  ],
  providers: [SaleService]
})

export class SaleModule {}
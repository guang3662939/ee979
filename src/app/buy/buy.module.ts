import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BuyRoutingModule } from './buy.routing';

//components
import { BuyComponent } from './buy.component';
import { FillInfoComponent } from './fill-info/fill-info.component';
import { GoodsDetailComponent } from './goods-detail/goods-detail.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { PayComponent } from './pay/pay.component';

@NgModule({
  declarations: [
    BuyComponent,
    FillInfoComponent,
    GoodsDetailComponent,
    GoodsListComponent,
    PayComponent,
  ],
  imports: [
    BuyRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: []
})
export class BuyModule {}
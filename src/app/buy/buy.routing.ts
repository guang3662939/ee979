import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyComponent } from './buy.component';
import { FillInfoComponent } from './fill-info/fill-info.component';
import { GoodsDetailComponent } from './goods-detail/goods-detail.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { PayComponent } from './pay/pay.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BuyComponent,
    children: [
      {
        path: '',
        component: GoodsListComponent
      },
      {
        path: 'detail/:id',
        component: GoodsDetailComponent
      },
      {
        path: 'detail/:id/create',
        component: FillInfoComponent
      },
      {
        path: 'detail/:id/pay',
        component: PayComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class BuyRoutingModule {}
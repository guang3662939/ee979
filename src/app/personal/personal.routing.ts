import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//service
import { AuthGuard } from '../services/auth-guard.service';

import { AccountSecurityComponent } from './account-security/account-security.component';
import { AuthPhoneComponent } from './auth-phone/auth-phone.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { DoneSaleComponent } from './done-sale/done-sale.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FinanceComponent } from './finance/finance.component';
import { LikedComponent } from './liked/liked.component';
import { LoginRecordComponent } from './login-record/login-record.component';
import { MessagesCenterComponent } from './message-center/messages-center.component';
import { OnSaleComponent } from './on-sale/on-sale.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PersonalComponent } from './personal.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PurchasedComponent } from './purchased/purchased.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PersonalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PersonalCenterComponent
      },
      {
        path: 'messages',
        component: MessagesCenterComponent
      },
      {
        path: 'finance',
        component: FinanceComponent
      },
      {
        path: 'info',
        component: PersonalInfoComponent
      },
      {
        path: 'purchased',
        component: PurchasedComponent
      },
      {
        path: 'liked',
        component: LikedComponent
      },
      {
        path: 'on-sale',
        component: OnSaleComponent
      },
      {
        path: 'sold',
        component: DoneSaleComponent,
      },
      {
          path: 'sold/detail/:id',
          component: OrderDetailComponent
      },
      {
        path: 'security',
        component: AccountSecurityComponent
      },
      {
        path: 'security/record',
        component: LoginRecordComponent
      },
      {
        path: 'security/phone',
        component: AuthPhoneComponent
      },
      {
        path: 'complaint',
        component: ComplaintComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class PeronsalRoutingModule {}
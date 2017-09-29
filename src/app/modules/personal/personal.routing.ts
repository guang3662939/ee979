import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//service
import { AuthGuard } from '../../services/auth-guard.service';

import { AccountSecurityComponent } from './account-security/account-security.component';
import { AuthIdComponent } from './account-security/children/auth-id/auth-id.component';
import { BankcardComponent } from './account-security/children/bankcard/bankcard.component';
import { ChangePasswdComponent } from './account-security/children/change-passwd/change-passwd.component';
import { ChangePhoneComponent } from './account-security/children/change-phone/change-phone.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { DoneSaleComponent } from './done-sale/done-sale.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FinanceComponent } from './finance/finance.component';
import { LikedComponent } from './liked/liked.component';
import { LoginRecordComponent } from './account-security/children/login-record/login-record.component';
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
        children: [
          {
            path: '',
            component: DoneSaleComponent
          },
          {
            path: 'detail/:id',
            component: OrderDetailComponent
        },
        ]
      },
      {
        path: 'security',
        children: [
          {
            path: '',
            component: AccountSecurityComponent
          },
          {
            path: 'record',
            component: LoginRecordComponent
          },
          {
            path: 'auth',
            component: AuthIdComponent
          },
          {
            path: 'phone',
            component: ChangePhoneComponent
          },
          {
            path: 'passwd',
            component: ChangePasswdComponent
          },
          {
            path: 'bankcard',
            component: BankcardComponent
          },
        ]
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
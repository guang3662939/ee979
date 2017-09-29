import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

//module
import { PeronsalRoutingModule } from './personal.routing';

//service
import { PersonalService } from './personal.service';

//components
import { AccountSecurityComponent } from './account-security/account-security.component';
import { AuthPhoneComponent } from './auth-phone/auth-phone.component';
import { ChangePasswdComponent } from './change-passwd/change-passwd.component';
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


@NgModule({
  declarations: [
    AccountSecurityComponent,
    AuthPhoneComponent,
    ChangePasswdComponent,
    ComplaintComponent,
    DoneSaleComponent,
    FeedbackComponent,
    FinanceComponent,
    LikedComponent,
    LoginRecordComponent,
    MessagesCenterComponent,
    OnSaleComponent,
    OrderDetailComponent,
    PersonalComponent,
    PersonalCenterComponent,
    PersonalInfoComponent,
    PurchasedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PeronsalRoutingModule,
    SharedModule
  ],
  providers: [
    PersonalService
  ]
})

export class PersonalModule {}
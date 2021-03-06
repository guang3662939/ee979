import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

//module
import { PeronsalRoutingModule } from './personal.routing';

//service
import { PersonalService } from './personal.service';

//components
import { AccountSecurityComponent } from './account-security/account-security.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { DoneSaleComponent } from './done-sale/done-sale.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FinanceComponent } from './finance/finance.component';
import { LikedComponent } from './liked/liked.component';
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
    ComplaintComponent,
    DoneSaleComponent,
    FeedbackComponent,
    FinanceComponent,
    LikedComponent,
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
    PeronsalRoutingModule,
    SharedModule
  ],
  providers: [
    PersonalService
  ]
})

export class PersonalModule {}
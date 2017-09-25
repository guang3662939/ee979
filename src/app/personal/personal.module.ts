import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PeronsalRoutingModule } from './personal.routing';

import { MessagesCenterComponent } from './message-center/messages-center.component';
import { PersonalComponent } from './personal.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';


@NgModule({
  declarations: [
    MessagesCenterComponent,
    PersonalComponent,
    PersonalCenterComponent
  ],
  imports: [
    CommonModule,
    PeronsalRoutingModule,
    SharedModule
  ],
})

export class PersonalModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PeronsalRoutingModule } from './personal.routing';

import {PersonalComponent } from './personal.component';
import { MessagesCenterComponent } from './messages/messages-center.component'

@NgModule({
  declarations: [
    MessagesCenterComponent,
    PersonalComponent
  ],
  imports: [
    CommonModule,
    PeronsalRoutingModule,
    SharedModule
  ],
})

export class PersonalModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//service
import { AuthGuard } from '../services/auth-guard.service';

import { MessagesCenterComponent } from './message-center/messages-center.component';
import { PersonalComponent } from './personal.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';

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
export class PeronsalRoutingModule {}
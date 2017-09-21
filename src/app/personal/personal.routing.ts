import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//service
import { AuthGuard } from '../services/auth-guard.service';

import { PersonalComponent } from './personal.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PersonalComponent,
    canActivate: [AuthGuard],
    children: [

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
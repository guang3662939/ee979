import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { LoginComponent } from '../components/login/login.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ToolbarComponent
  ]
})

export class SharedModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ToolbarComponent
  ]
})

export class SharedModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PaginationComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PaginationComponent,
    ToolbarComponent
  ]
})

export class SharedModule {}
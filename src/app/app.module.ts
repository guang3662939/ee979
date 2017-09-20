import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
//模块
import { SharedModule } from './shared/shared.module';

// 组件
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';


//service
import { LoginService } from './components/login/login.service';
import { UploadComponent } from './upload/upload.component';

import {
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdRadioModule,
  MdButtonModule,
  MdProgressBarModule,
  MdToolbarModule,
  FullscreenOverlayContainer,
  MaterialModule,
  MdNativeDateModule,
  OverlayContainer
} from '@angular/material';

import 'hammerjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    FileUploadModule,
    MaterialModule,
    MdNativeDateModule,
    NgxDatatableModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

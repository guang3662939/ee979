import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';


//模块
import { SharedModule } from './shared/shared.module';

// 组件
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';

//service
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { DialogService } from './services/dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

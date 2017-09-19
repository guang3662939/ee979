import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

//模块
import { SharedModule } from './shared/shared.module';

// 组件
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//service
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { LoginService } from './components/login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

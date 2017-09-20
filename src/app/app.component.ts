import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  loginType: string = 'login';
  isLoggedIn: boolean = false;
  showLoginForm: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.showLogin.subscribe(
      val => {
        if (!val) {
          this.loginType = 'login';
        }
        this.showLoginForm = val;
      }
    );

    this.authService.isLoggedIn.subscribe(
      val => {
        this.isLoggedIn = val;
      }
    );
  }

  // 监听子组件事件
  onSign(type) {
    if (type === 'login') {
      this.loginType = 'login';
    } else if (type === 'register') {
      this.loginType = 'register';
    }
    this.showLoginForm = true;
  }
  
}

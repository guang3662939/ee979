import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginType: string = 'login';
  showLoginForm: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.showLogin.subscribe(
      val => {
        this.showLoginForm = val;
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

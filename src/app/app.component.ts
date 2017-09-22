import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './services/auth.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  loginType: string = 'login';
  isLoggedIn: boolean = false;
  showLoginForm: boolean = false;

  timeValid: number;

  navigated: boolean = true;

  constructor(
    private authService: AuthService, 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {

    this.authService.navigated.subscribe(
      val => this.navigated = val
    );

    let data = this.getValidTime();

    if (!data && !this.router.navigated) {
      this.authService.navigated.next(false);
    }

    if (data) {
      this.authService.accessToken.next(data.id);
      this.authService.isLoggedIn.next(true);
      this.authService.timeValid.next(data.ttl - (Date.now() - new Date(data.created).getTime()) / 1000);
    }

    var numbers = Observable.interval(1000);
    numbers.subscribe(x => {
      if (x >= this.timeValid) {
        this.authService.isLoggedIn.next(false);
        this.authService.timeValid.next(0);
        localStorage.removeItem('data');
      }
    });

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

    this.authService.timeValid.subscribe(val => this.timeValid = val);
  }

  getValidTime() {
    const data = localStorage.getItem('data');
    if (data) {
      return JSON.parse(data);
    }
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {

    //test only
    console.log(this.router)

    let data = this.getValidTime();

    if (!this.router.navigated) {
      // this.router.navigate(['/']);
      this.authService.navigated = false;
    }

    if (data) {
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

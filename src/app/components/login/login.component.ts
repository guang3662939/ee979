import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
  @Input() loginType: string;
  @Input() calledByOther: string;

  // 登录
  phonePattern = '1[3-9]\\d{9}';
  loginPhone = '';
  loginPass = '';

  // 注册
  regCode: string = '';
  regPhone: string = '';
  regPasswd: string = '';
  regPasswd2: string = '';

  formValid: boolean = false;

  codeTimer: any;
  count: number = 60;
  sendIngCode: boolean = false;

  animLogin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
  }

  getCode() {
    this.sendIngCode = true;
    this.codeTimer = setInterval(() => {
      if (this.count > 1) {
        this.count--;
      } else {
        this.sendIngCode = false;
        this.count = 60;
        clearInterval(this.codeTimer);
      }
    }, 1000);
  }

  onLogin(e) {
    this.authService.login(this.loginPhone, this.loginPass)
      .then(res => {
        console.log(res);
        if (res.data) {
          this.authService.isLoggedIn.next(true);
          this.authService.timeValid.next(res.data.ttl);
          this.authService.showLogin.next(false);

          this.storeValidTime(res.data);

          if (this.authService.redirectUrl) {
            this.router.navigate([this.authService.redirectUrl]);
            this.authService.redirectUrl = '';
          }
        }
      }).catch(err => console.log(err));
  }

  storeValidTime(data) {
    console.log(data)
    localStorage.setItem('data', JSON.stringify(data));
  }

  onRegSubmit() {
    console.log(123)
  }

  hideForm() {
    this.authService.showLogin.next(false);
  }

  goOtherWay(type) {
    if (this.calledByOther) {
      this.calledByOther = null;
    }

    this.animLogin = type == 'login' ? true : false;
    this.loginType = type === 'login' ? 'login' : 'register';
    
  }
}
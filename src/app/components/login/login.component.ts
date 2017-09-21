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

  navigated: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.navigated = this.authService.navigated.value;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
  }

  goHome() {
    this.router.navigate(['/']);
  }


  //获取验证码
  getCode() {
    this.sendIngCode = true;
    this.authService.getCode(this.regPhone);
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

  //登录
  onLogin() {
    this.authService.login(this.loginPhone, this.loginPass)
      .then(res => {
        if (res.data) {
          this.storeValidTime(res.data);

          if (this.authService.redirectUrl) {
            this.router.navigate([this.authService.redirectUrl]);
            this.authService.redirectUrl = '';
          }
        }
      }).catch(err => console.log(err));
  }

  storeValidTime(data) {
    this.authService.isLoggedIn.next(true);
    this.authService.timeValid.next(data.ttl);
    this.authService.showLogin.next(false);
    this.authService.accessToken = data.id;
    localStorage.setItem('data', JSON.stringify(data));
  }

  //注册
  onRegSubmit() {
    if (this.regPhone && this.regCode && this.regPasswd && this.regPasswd2 && (this.regPasswd === this.regPasswd2)) {
      this.authService.register(this.regPhone, this.regPasswd, this.regCode)
        .then(res => {
          if (res.data) {
            this.storeValidTime(res.data);
          }
        })
    }
  }

  //隐藏表单
  hideForm() {
    this.authService.showLogin.next(false);
  }

  //登录注册切换
  goOtherWay(type) {
    if (this.calledByOther) {
      this.calledByOther = null;
    }

    this.animLogin = type == 'login' ? true : false;
    this.loginType = type === 'login' ? 'login' : 'register';
    
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

  state = 'register';
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

  constructor() { }

  ngOnInit() { }

  getCode() {
    this.sendIngCode = true;
    this.codeTimer = setInterval(() => {
      if (this.count > 1) {
        this.count--;
      } else {
        this.sendIngCode = false;
        clearInterval(this.codeTimer);
      }
    }, 1000);
  }

  onLogin(e) {
    // e.preventDefault();
  }

  onRegSubmit() {
    console.log(123)
  }
}
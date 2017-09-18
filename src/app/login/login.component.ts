import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
  @Input() loginType: string;
  @Input() calledByOther: string;
  @Output() cancel = new EventEmitter();

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

  constructor() { }

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

  hideForm() {
    this.cancel.emit();
  }

  goOtherWay(type) {
    if (this.calledByOther) {
      this.calledByOther = null;
    }

    this.animLogin = type == 'login' ? true : false;
    this.loginType = type === 'login' ? 'login' : 'register';

    // setTimeout(() => this.animLogin = !this.animLogin, 0);
    
  }
}
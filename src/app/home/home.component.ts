import { Component, OnInit } from '@angular/core';

import { menus } from '../constants/menus';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  curHero: number = 0;
  curBanner: number = 0;
  showLoginForm: boolean = false;
  loginType: string = '';
  menus = menus;

  constructor() { }

  ngOnInit() { }

  log_reg(type) {
    if (type === 'login') {
      this.loginType = 'login';
    } else if (type === 'register') {
      this.loginType = 'register';
    }
    this.showLoginForm = true;
  }
  // 监听子组件事件
  onCancelLogin() {
    this.showLoginForm = false;
  }


}
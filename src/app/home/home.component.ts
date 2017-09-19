import { Component, OnInit } from '@angular/core';


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
  

  constructor() { }

  ngOnInit() {
  }

  
  // 监听子组件事件
  onCancelLogin() {
    this.showLoginForm = false;
  }

  onSign(type) {
    console.log(type)
    if (type === 'login') {
      this.loginType = 'login';
    } else if (type === 'register') {
      this.loginType = 'register';
    }
    this.showLoginForm = true;
  }


}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs';

import { API_URL } from '../shared/api';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  isLoggedIn = new BehaviorSubject(false);
  showLogin = new BehaviorSubject(false);
  timeValid = new BehaviorSubject(0);
  navigated = new BehaviorSubject(true);
  accessToken = new BehaviorSubject('');

  redirectUrl: string;

  //获取验证码
  getCode(phone: string): Promise<any> {
    let body = {
      phone
    };
    return this.http.post(`${API_URL}Sms/getCode`, body)
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  //注册
  register(phone: string, password: string, code: string) {
    let body = {
      phone,
      password,
      code
    };
    return this.http.post(`${API_URL}Members/phoneReg`, body)
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  //登录
  login(phone: string, password: string) {
    let body = {
      phone,
      password
    };
    return this.http.post(`${API_URL}Members/phoneLogin`, body)
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  //登出
  logout(access_token:string = '') {
    return this.http.post(`${API_URL}Members/logout?access_token=${access_token}`, {})
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }


  //储存登录有效期
  storeTimeValid() {
    
  }
  
}
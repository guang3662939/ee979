import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { API_URL } from '../constants/api';

@Injectable()
export class LoginService {
  constructor(private http: Http) {}
  
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

  //登录
  login(username: string, password: string) {
    let body = {
      username,
      password
    };
    return this.http.post(`${API_URL}Members/login`, body)
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  //登出
  logout(access_token:string = '') {
    let body = {
      access_token
    };
    return this.http.post(`${API_URL}Members/logout`, body)
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

}
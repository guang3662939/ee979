import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthService } from '../services/auth.service';

import 'rxjs/add/operator/toPromise';
import { API_URL } from '../shared/api';

@Injectable()
export class SaleService {
  toSale;
  accesToken: string;

  constructor(
    private authService: AuthService,
    private http: Http) {
      this.authService.accessToken.subscribe(val => this.accesToken = val);
  }

  getOssKey() {
    return this.http.post(`${API_URL}AliyunOsses/token?access_token=${this.accesToken}`, {})
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  upLoad(data) {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
  }

  destroy(): void {
    this.toSale = null;
  }
}
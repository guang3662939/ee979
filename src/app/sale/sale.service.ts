import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { API_URL } from '../shared/api';

@Injectable()
export class SaleService {
  toSale;

  constructor(private http: Http) {}

  getOssKey(access_token) {
    this.http.post(`${API_URL}AliyunOsses/token?access_token=${access_token}`, {})
      .toPromise()
      .then(res => {
        console.log(res)
        return res.json();
      }).catch(err => console.log(err));
  }

  destroy(): void {
    this.toSale = null;
  }
}
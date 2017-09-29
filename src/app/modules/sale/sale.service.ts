import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthService } from '../../services/auth.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { API_URL } from '../../shared/api';

@Injectable()
export class SaleService {
  toSale;
  toSaleText;
  productInfo;
  bundle = {
    loc: {
      areaName: "",
      serverName: "",
      goodsType: "",
      tradeType: ""  
    },
    data: {
      goods: {
        career: "",
        gender: "",
        level: null,
        title: "",
        unitPrice: null,
        description: "",
        refund: "",
        images: ""
      },
      account: {
        account: "",
        password: "",
        character: "",
        cargoPwd: "",
        sfzh1: "",
        sfzh2: ""
      },
      service: {
        cipher: "",
        startH: null,
        endH: null,
        ttl: null,
        target: "",
        tradePws: "",
        moneyTo: "",
        // compensate: ""
      }
    }
  };
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

  getGoodsInfo(id) {
    return this.http.post(`${API_URL}GjolGoods/betail?access_token=${this.accesToken}`, {id})
      .map(res => res.json());
  }

  getServerList() {
    return this.http.get(`${API_URL}GjolServers/list?access_token=${this.accesToken}`)
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  getTradeList() {
    return this.http.get(`${API_URL}GjolTypes/list`)
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  publish(body) {
    return this.http.post(`${API_URL}GjolGoods/add?access_token=${this.accesToken}`, body)
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
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { SaleService } from '../sale.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sale-result',
  templateUrl: 'sale-result.component.html',
  styleUrls: ['sale-result.component.scss']
})

export class SaleResultComponent implements OnInit {
  sn;
  game;
  title;
  price;

  constructor(
    private route: ActivatedRoute,
    private saleService: SaleService
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.saleService.getGoodsInfo(Number(id))
      .subscribe(
        res => {
          console.log(res);
          if (res.data) {
            const { areaName, serverName, sn, title, unitPrice } = res.data;
            this.sn = sn;
            this.game = `古剑奇谭 > ${areaName} > ${serverName}`;
            this.title = title;
            this.price = unitPrice.toFixed(2);
          }
        },
        err => {
          console.log('fail', err._body);
          if (err.status === 500) {
            // alert('商品不存在');
          }
        }
      );

    }

    onCopy(textarea) {
      textarea.value = this.sn;
      textarea.select();
      document.execCommand('copy');
    }

}
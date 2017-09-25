import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SaleService } from '../sale.service';

@Component({
  selector: 'to-sale',
  templateUrl: './to-sale.component.html',
  styleUrls: ['./to-sale.component.scss']
})
export class ToSaleComponent {
  //初始交易类型
  gtIdx = null;
  goodsTypes = [];
  //初始游戏区
  pgIdx = null;
  playgrounds = [];
  //初始游戏服
  gsIdx = null;
  gameServers = [];
  //初始交易类型
  ttIdx = null;
  tradeTypes = [];

  typesList;
  serverList;


  timer;
  scrollTop = 0;


  constructor(
    private router: Router,
    private saleService: SaleService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    if (this.saleService.toSale) {
      this.recoverData(this.saleService.toSale);
    } else {
      this.getTradeList();
    }
  }

  getTradeList() {
    this.saleService.getTradeList()
      .then(res => {
        this.typesList = res.data;
        const arr = res.data.map(v => v.goodsType)
        this.goodsTypes = Array.from(new Set(arr));

        this.getServerList();
      }).catch(err => console.log(err));
  }

  getServerList(){
    this.saleService.getServerList()
      .then(res => {
        this.serverList = res.data;
        const arr = res.data.map(v => v.areaName)
        this.playgrounds = Array.from(new Set(arr));

      }).catch(err => console.log(err));
  }

  ngOnDestroy() {
    if (window.location.pathname.indexOf('sale') == -1) {
      this.saleService.destroy();
    }
  }

  recoverData(data) {
    this.gtIdx = data.gtIdx,
    this.pgIdx = data.pgIdx,
    this.gsIdx = data.gsIdx,
    this.ttIdx = data.ttIdx
  }


  onOptionClick(type, idx, el) {
    
    switch (type) {
      case 'gt':
        this.gtIdx === null && setTimeout(this.scroll, 0);
        this.gtIdx = idx;
        this.tradeTypes = this.typesList.filter(v => v.goodsType === this.goodsTypes[this.gtIdx]).map(v => v.tradeType);
        break;
      case 'pg':
        this.pgIdx === null && setTimeout(this.scroll, 0);
        this.pgIdx = idx;
        this.gameServers = this.serverList.filter(v => v.areaName === this.playgrounds[this.pgIdx]).map(v => v.serverName);
        break;
      case 'gs':
        this.gsIdx === null && setTimeout(this.scroll, 0);  
        this.gsIdx = idx;
        break;
      case 'tt':
        this.ttIdx = idx;
        break;
      default:
        break;
    }
  }

  scroll(height) {
    height = document.body.scrollHeight - window.innerHeight - document.querySelector('.bottom').clientHeight;
    this.timer = setInterval(() => {
      let scrollTop = document.body.scrollTop;
      let max = document.body.scrollHeight - window.innerHeight;
      scrollTop += 10;
      if (scrollTop >= max || scrollTop >= height) {
        let tmp = max > height ? height : max;
        this.scrollTop += tmp;
        document.body.scrollTop = tmp;
        return clearInterval(this.timer);
      }
      document.body.scrollTop = scrollTop;
    }, 1000 / 60);
  }


  onNextClick() {
    this.syncData();
    this.router.navigate(['/sale/product'])
  }

  syncData() {
    this.saleService.toSale = {
      gtIdx: this.gtIdx,
      pgIdx: this.pgIdx,
      gsIdx: this.gsIdx,
      ttIdx: this.ttIdx
    };
    this.saleService.toSaleText = [
      this.goodsTypes[this.gtIdx], 
      this.playgrounds[this.pgIdx],
      this.gameServers[this.gsIdx],
      this.tradeTypes[this.ttIdx],
    ];
    this.saleService.bundle.loc = {
      areaName: this.playgrounds[this.pgIdx],
      serverName: this.gameServers[this.gsIdx],
      goodsType: this.goodsTypes[this.gtIdx],
      tradeType: this.tradeTypes[this.ttIdx]  
    };
  }
  
}

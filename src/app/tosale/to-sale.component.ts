import { Component } from '@angular/core';


@Component({
  selector: 'to-sale',
  templateUrl: './to-sale.component.html',
  styleUrls: ['./to-sale.component.scss']
})
export class ToSaleComponent {
  //初始交易类型
  gtIdx = null;
  goodsTypes = ['账号交易', '金币交易', '装备交易', '代练交易'];
  //初始游戏区
  pgIdx = null;
  playgrounds = ['网通区', '大战区', '电信区', '移动区'];
  //初始游戏服
  gsIdx = null;
  gameServers = ['罗西元', '陶然亭', '天后宫', '华楼宫', '玄月谷', '碧空海', '南柯梦'];
  //初始交易类型
  ttIdx = null;
  tradeTypes = ['担保交易', '寄售交易'];


  onOptionClick(type, idx) {
    
    switch (type) {
      case 'gt':
        this.gtIdx = idx;
        break;
      case 'pg':
        this.pgIdx = idx;
        break;
      case 'gs':
        this.gsIdx = idx;
        break;
      case 'tt':
        this.ttIdx = idx;
        break;
      default:
        break;
    }
  }
  
}

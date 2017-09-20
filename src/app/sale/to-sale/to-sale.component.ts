import { Component } from '@angular/core';
import { Router } from '@angular/router';


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
  gameServers = ['罗西元', '陶然亭', '天后宫', '华楼宫', '玄月谷', '碧空海', '南柯梦','罗西元', '陶然亭', '天后宫', '华楼宫', '玄月谷', '碧空海', '南柯梦'];
  //初始交易类型
  ttIdx = null;
  tradeTypes = ['担保交易', '寄售交易'];

  timer;
  scrollTop = 0;


  constructor(private router: Router) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }


  onOptionClick(type, idx, el) {
    
    switch (type) {
      case 'gt':
        this.gtIdx === null && setTimeout(this.scroll, 0);
        this.gtIdx = idx;
        break;
      case 'pg':
        this.pgIdx === null && setTimeout(this.scroll, 0);
        this.pgIdx = idx;
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
    this.router.navigate(['/sale/product'])

  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  hideFixed: boolean = false;
  refunds = ['不支持，让买家担心', '一个月内找回包赔', '两个月内找回包赔', '三个月内找回包赔'];
  refundSelected: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.onScroll);
  }
  
  //DOM events
  onScroll = () => {
    let scrollTop = document.body.scrollHeight - window.innerHeight - document.querySelector('.bottom').clientHeight;
    if (document.body.scrollTop < scrollTop) {
      this.hideFixed = false;
    } else {
      this.hideFixed = true;
    }
  }

  onNextClick() {
    this.router.navigate(['/sale/account']);
  }

  canDeactivate() {
    
    if (window.location.pathname !== this.router.url) {
      return true;
    }
    return this.dialogService.confirm();
  }

}

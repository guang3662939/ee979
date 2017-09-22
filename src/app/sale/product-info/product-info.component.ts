import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as sha1 from 'js-sha1';

import { DialogService } from '../../services/dialog.service';
import { SaleService } from '../sale.service';

const URL = 'http://ee979-tmp.oss-cn-hangzhou.aliyuncs.com/';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  hideFixed: boolean = false;
  refunds = ['不支持，让买家担心', '一个月内找回包赔', '两个月内找回包赔', '三个月内找回包赔'];
  refundSelected: number = 0;
  
  uploader:FileUploader = new FileUploader({
    method: "POST",
    url: URL,
    isHTML5: true,
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService,
    private saleService: SaleService
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

  upLoad() {
    this.saleService.getOssKey()
      .then(res => {
        this.uploader.onBuildItemForm = (item, form) => {
          for (let key in res.data) {
            form.append(key, res.data[key]);
          }
          // @Note: 随机文件名称
          form.append('key', res.data['id']+'/'+ sha1(Date.now().toString()));
        };
      })
  }

}

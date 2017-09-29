import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as sha1 from 'js-sha1';

import { DialogService } from '../../../services/dialog.service';
import { SaleService } from '../sale.service';

const URL = 'http://ee979-tmp.oss-cn-hangzhou.aliyuncs.com/';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  toSaleText;
  hideFixed: boolean = false;
  refunds = ['不支持，让买家担心', '一个月内找回包赔', '两个月内找回包赔', '三个月内找回包赔'];
  careers = ['天罡', '斩风', '御剑', '妙法', '司令', '咒隐'];
  career = '天罡';
  level = '1';
  gender = '男';
  title = '1';
  unitPrice = 1;
  description = '1';
  refundSelected: number = 0;
  imgFrames = new Array(7);
  curFrame: number;
  //显示提示
  showNotice: boolean = true;
  
  uploader: FileUploader = new FileUploader({
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
    // if (!this.saleService.toSale) {
    //   return this.router.navigate(['/sale']);
    // }
    this.saleService.productInfo && this.recoverData(this.saleService.productInfo);
    this.toSaleText = this.saleService.toSaleText && this.saleService.toSaleText.join(' > ');
    window.addEventListener('scroll', this.onScroll);
    this.uploader.onSuccessItem = this.onSuccess.bind(this);
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

  onNextClick(form) {
    // console.log(form)
    if (form.valid) {
      this.syncData();
      this.router.navigate(['/sale/account']);
    } else {
      return alert('请填写所包含的必填信息');
    }
  }

  syncData() {
    this.saleService.bundle.data.goods = {
      career: this.career,
      gender: this.gender,
      level: Number(this.level),
      title: this.title,
      unitPrice: Number(this.unitPrice),
      description: this.description,
      refund: this.refunds[this.refundSelected],
      images: this.imgFrames.join(';')
    };
  }

  recoverData(data) {
    this.career = data._career; 
    this.level = data._level; 
    this.gender = data._gender; 
    this.title = data._title; 
    this.unitPrice = data._unitPrice; 
    this.description = data._description;
  }

  canDeactivate() {
    
    // if (window.location.pathname !== this.router.url) {
    //   return true;
    // }
    // return this.dialogService.confirm();
    return true;
  }

  validate() {
    if (this.career && this.level && this.gender && this.title && this.unitPrice && this.description) {

    } else {
      
    }
  }

  wrapOos(index) {
    this.curFrame = index;
    this.saleService.getOssKey()
      .then(res => {
        this.uploader.onBuildItemForm = (item, form) => {
          for (let key in res.data) {
            form.append(key, res.data[key]);
          }
          form.append('key', res.data['id']+'/'+ sha1(Date.now().toString()));
        };
        this.uploader.queue[0].upload();
      })
  }

  onSuccess(item, res, status, headers) {
    this.imgFrames[this.curFrame] = JSON.parse(res).data.filename;
    this.uploader.clearQueue();
  }

}

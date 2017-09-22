import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as sha1 from 'js-sha1';

import { SaleService } from '../sale.service';

const URL = 'http://ee979-tmp.oss-cn-hangzhou.aliyuncs.com/';

@Component({
  selector: 'account-info',
  templateUrl: 'account-info.component.html',
  styleUrls: ['account-info.component.scss']
})

export class AccountInfoComponent implements OnInit {

  //form2
  startH = 0;
  endH;
  hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23, 24];
  tes;
  ttl;
  target;
  tradePws;
  moneyTo;
  compensate;

  front;
  back;
  frameType;
  uploader: FileUploader = new FileUploader({
    method: "POST",
    url: URL,
    isHTML5: true,
  });

  constructor(private router: Router, private saleService: SaleService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.startHChange();
    this.uploader.onSuccessItem = this.onSuccess.bind(this);
  }

  wrapOos(type) {
    this.frameType = type;
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
    const filename = JSON.parse(res).data.filename;
    if (this.frameType === 'front') {
      this.front = filename;
    } else {
      this.back = filename;
    }
    this.uploader.clearQueue();
  }

  startHChange() {
    this.tes = this.hours.slice(Number(this.startH) + 1);
    this.endH = this.tes[0];
  }

  onNextClick() {
    this.router.navigate(['/sale/result']);
  }
}
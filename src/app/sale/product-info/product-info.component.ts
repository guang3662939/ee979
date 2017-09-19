import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { debounce } from '../../shared/helper';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  fixed: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route)
    window.addEventListener('scroll', debounce(this.onScroll, 200, false));
  }

  onScroll = () => {
    
    let scrollTop = document.body.scrollHeight - window.innerHeight - document.querySelector('.bottom').clientHeight - document.querySelector('.info-label').clientHeight;
    // console.log(this.fixed)
    // console.log('document.body.scrollTop', document.body.scrollTop)
    if (document.body.scrollTop > scrollTop) {
      this.fixed = false;
    } else {
      this.fixed = true;
    }
  }

}

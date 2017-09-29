import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss']
})

export class PaginationComponent implements OnInit {

  items = [1,2,3,4,5,6,7,8,9,10,11];
  pagers;
  pagersBackup;
  pageNum: number = 1;
  hasEllipse: boolean = false;

  constructor() { }

  ngOnInit() {
    this.initPager();
  }

  initPager() {
    const arr = [];
    const arr2 = [];
    for (let i = 0; i < this.items.length; i++) {
      arr.push(i + 1);
      arr2.push(i + 1);
    }
    this.pagers = arr;
    this.pagersBackup = arr2;

    if (this.pagers.length >= 8) {
      this.hasEllipse = true;
      this.pagers.splice(5, this.pagersBackup.length - 6, 'end');
    } 
  }


  onPrev() {
    this.pageNum--;
  }

  onPagerClick(page) {
    this.pageNum = page;
  }

  onNext() {
    this.pageNum++;
  }

  calculate() {
    if (!this.hasEllipse) { 
      return; 
    }

    const arr = [];

    for (let i = 0; i < this.pagers.length; i++) {
      
    }
  }
}
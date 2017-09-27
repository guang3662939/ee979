import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'goods-list',
  templateUrl: 'goods-list.component.html',
  styleUrls: ['goods-list.component.scss']
})

export class GoodsListComponent implements OnInit {

  items = [
    {status: '', text: '立即购买'},
    {status: 'ongoing', text: '交易中'},
    {status: 'done', text: '交易完成'},
    {status: '', text: '立即购买'}
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() { }

  viewDetail() {
    this.router.navigate(['detail/:id', {id: 1}], {relativeTo: this.route});
  }
}
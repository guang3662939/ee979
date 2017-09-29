import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'goods-detail',
  templateUrl: 'goods-detail.component.html',
  styleUrls: ['goods-detail.component.scss']
})

export class GoodsDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() { }

  buyNow() {
    this.router.navigate(['create'], {relativeTo: this.route});
  }
}
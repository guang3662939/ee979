import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'sale-result',
  templateUrl: 'sale-result.component.html',
  styleUrls: ['sale-result.component.scss']
})

export class SaleResultComponent implements OnInit {
  sn: string;
  game: string;
  title: string;
  price: number;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const data = this.route.queryParamMap.map(params => params.get('data') || {});
    console.log(data);

  }

}
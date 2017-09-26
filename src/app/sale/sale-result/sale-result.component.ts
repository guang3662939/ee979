import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sale-result',
  templateUrl: 'sale-result.component.html',
  styleUrls: ['sale-result.component.scss']
})

export class SaleResultComponent implements OnInit {
  sn;
  game;
  title;
  price;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    console.log(this.route.snapshot.paramMap.get('id'))
  }

}
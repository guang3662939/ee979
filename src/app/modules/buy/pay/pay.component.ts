import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buy-pay',
  templateUrl: 'pay.component.html',
  styleUrls: ['pay.component.scss']
})

export class PayComponent implements OnInit {
  confirmed;
  canceled;
  constructor() { }

  ngOnInit() { }
}
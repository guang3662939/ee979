
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bankcard',
  templateUrl: 'bankcard.component.html',
  styleUrls: ['bankcard.component.scss']
})

export class BankcardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }
}
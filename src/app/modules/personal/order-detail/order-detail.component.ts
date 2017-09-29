import { Component, OnInit } from '@angular/core';

import { PersonalService } from '../personal.service';

@Component({
  selector: 'order-detail',
  templateUrl: 'order-detail.component.html',
  styleUrls: ['order-detail.component.scss']
})

export class OrderDetailComponent implements OnInit {
  constructor(
    private personalService: PersonalService
  ) { }

  ngOnInit() {
    console.log('hello')
    
  }

  ngOnDestroy() {
    this.personalService.routerChange.next(true);
  }
}
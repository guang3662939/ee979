import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})

export class BuyComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
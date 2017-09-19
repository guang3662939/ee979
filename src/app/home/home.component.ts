import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  curHero: number = 0;
  curBanner: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
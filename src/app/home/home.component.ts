import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  curHero: number = 0;
  curBanner: number = 0;
  nextBanner;
  tradeType: number = 1;
  animType = ['tl', 'down', 'tr', 'right', 'br', 'up', 'bl', 'left', 'fade'];
  randomType;
  curIndicator: number = 0;

  banners = [
    '/assets/images/ban_01.jpg',
    '/assets/images/ban_02.jpg',
    '/assets/images/ban_03.jpg',
  ];

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.navigated.next(true);
    this.authService.redirectUrl = '';
    window.scrollTo(0, 0);
    // this.carousel();
  }


  onNextPoster(index) {
    if (index === this.curBanner) {
      return;
    }
    this.nextBanner = index;
    this.curIndicator = index;
    this.getRandomType();

    setTimeout(() => {
      this.curBanner = index;
    }, 400);
  }

  carousel() {
    setInterval(() => {
      let i = this.curBanner < 2 ? this.curBanner + 1 : 0;
    }, 4000);
  }

  getRandomType() {
    const idx = Math.floor(Math.random() * this.animType.length);
    const type = this.animType[idx];

    if (type === this.randomType) {
      this.getRandomType();
    } else {
      this.randomType = type;
    }

  }

}
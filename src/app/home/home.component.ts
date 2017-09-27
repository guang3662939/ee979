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
  tradeType: number = 1;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.navigated.next(true);
    this.authService.redirectUrl = '';
    window.scrollTo(0, 0);
  }

}
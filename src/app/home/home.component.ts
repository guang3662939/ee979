import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  curHero: number = 0;
  curBanner: number = 0;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.navigated = true;
  }

}
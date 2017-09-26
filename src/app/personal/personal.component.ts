import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { PersonalService } from './personal.service';

import { personalMenus } from '../shared/menus';

@Component({
  selector: 'app-personal',
  templateUrl: 'personal.component.html',
  styleUrls: ['personal.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class PersonalComponent implements OnInit {

  accessToken: string;
  showMenu;
  menus = personalMenus;

  constructor(
    private authService: AuthService, 
    private personalService: PersonalService,
    private router: Router) { }

  ngOnInit() {
    this.authService.accessToken.subscribe(val => this.accessToken = val);
    this.personalService.routerChange.subscribe(val => this.showMenu = val);
    // console.log(this.router)
    if (this.router.url.indexOf('sold/detail') !== -1) {
      this.personalService.routerChange.next(false);
    }
  }

  logout() {
    this.authService.logout(this.accessToken)
      .then(res => {
        if (res.data === 'success') {
          this.authService.isLoggedIn.next(false);
          this.authService.timeValid.next(0);
          localStorage.removeItem('data');
          this.router.navigate(['/']);
        }
        
      }).catch(err => console.log(err));
  }
}
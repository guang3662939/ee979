import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-personal',
  templateUrl: 'personal.component.html',
  styleUrls: ['personal.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class PersonalComponent implements OnInit {

  accessToken: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.accessToken.subscribe(val => this.accessToken = val);
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
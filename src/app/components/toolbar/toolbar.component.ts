import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  @Output() sign = new EventEmitter();

  accessToken: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.accessToken.subscribe(val => this.accessToken = val);
  }

  log_reg(type) {
    this.sign.emit(type);
  }

  logout() {
    this.authService.logout(this.accessToken)
      .then(res => {
        if (res.data === 'success') {
          this.authService.isLoggedIn.next(false);
          this.authService.timeValid.next(0);
          sessionStorage.removeItem('data');
          this.router.navigate(['/']);
        }
        
      }).catch(err => console.log(err));
  }
}

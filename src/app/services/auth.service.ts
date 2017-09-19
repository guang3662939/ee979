import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthService {
  // isLoggedIn = false;
  isLoggedIn = new BehaviorSubject(false);

  redirectUrl: string;
  
  login() {
    this.isLoggedIn.next(true);
  }
  
}
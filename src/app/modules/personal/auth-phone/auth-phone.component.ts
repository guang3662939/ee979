
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-phone',
  templateUrl: 'auth-phone.component.html',
  styleUrls: ['auth-phone.component.scss']
})

export class AuthPhoneComponent implements OnInit {
  phone: string = '';
  code: string = '';
  authed: boolean = false;
  step3: boolean = false;
  success: boolean;
  fail: boolean;

  constructor() { }

  ngOnInit() { }

  onSubmit(f) {
    // console.log(123)
    if (!this.authed) {
      this.authed = true;
      return f.reset();
    }
    
    if (Math.random() > .5) {
      this.step3 = true;
      this.success = true;
    } else {
      this.fail = true;
    }
  }
}
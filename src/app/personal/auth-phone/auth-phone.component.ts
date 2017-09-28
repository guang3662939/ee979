
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

  constructor() { }

  ngOnInit() { }

  onSubmit(f) {
    // console.log(123)
    if (!this.authed) {
      this.authed = true;
      f.reset();
    }
    
  }
}
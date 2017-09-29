
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-id',
  templateUrl: 'auth-id.component.html',
  styleUrls: ['auth-id.component.scss']
})

export class AuthIdComponent implements OnInit {
  success;
  fail;
  
  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.fail = true;
  }
}
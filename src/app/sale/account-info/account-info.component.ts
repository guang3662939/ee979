import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'account-info',
  templateUrl: 'account-info.component.html',
  styleUrls: ['account-info.component.scss']
})

export class AccountInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onNextClick() {
    this.router.navigate(['/sale/result']);
  }
}
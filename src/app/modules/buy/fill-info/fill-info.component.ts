import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fill-info',
  templateUrl: 'fill-info.component.html',
  styleUrls: ['fill-info.component.scss']
})
export class FillInfoComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  goPay() {
    this.router.navigate(['../pay'], {relativeTo: this.route});
  }
  
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonalService } from '../personal.service';

@Component({
  selector: 'done-sale',
  templateUrl: 'done-sale.component.html',
  styleUrls: ['done-sale.component.scss']
})

export class DoneSaleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personalService: PersonalService
  ) { }

  ngOnInit() { }

  seeDetail() {
    this.personalService.routerChange.next(false);
    this.router.navigate(['detail/:id', {id: 23}], {relativeTo: this.route})
  }
}
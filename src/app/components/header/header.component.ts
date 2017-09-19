import { Component, OnInit } from '@angular/core';

import { menus } from '../../shared/menus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus = menus;

  constructor() { }

  ngOnInit() {
  }

}

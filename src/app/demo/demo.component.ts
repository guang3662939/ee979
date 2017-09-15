import {Component} from '@angular/core';

import { API_URL } from '../constants/api';

@Component({
  selector: 'app-demo',
  template: '<h2>hello</h2>',
  styleUrls: ['demo.component.scss']
})

export class DemoComponent {
  ngOnInit() {
    console.log(API_URL);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.scss']
})

export class PersonalInfoComponent implements OnInit {
  step2: boolean = false;
  step3: boolean = false;

  constructor() { }

  ngOnInit() { }

  nextStep() {
    if (!this.step2) {
      this.step2 = true;
    } else {
      this.step3 = true;
    }
  }
}
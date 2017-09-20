import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() sign = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  log_reg(type) {
    this.sign.emit(type);
  }
}

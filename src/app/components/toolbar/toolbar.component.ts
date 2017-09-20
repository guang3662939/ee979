import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  @Output() sign = new EventEmitter();

  ngOnInit() {

  }

  log_reg(type) {
    this.sign.emit(type);
  }
}

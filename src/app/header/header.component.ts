import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buttonClicked = 'recipes';
  @Output() fireButtonClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onBtnClick(event) {
    this.fireButtonClick.emit(event);
    this.buttonClicked = event;
    console.log(event);
  }

}

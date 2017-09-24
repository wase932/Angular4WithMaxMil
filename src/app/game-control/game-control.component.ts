import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  isGameRunning = false;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    if (this.isGameRunning === false) { this.interval = setInterval(
      () => {this.intervalFired.emit(this.lastNumber + 1);
              this.lastNumber ++; }
          , 1000);
      }
      this.isGameRunning = true;
  }

  stopGame() {
    this.isGameRunning = false;
    clearInterval(this.interval);
  }

}

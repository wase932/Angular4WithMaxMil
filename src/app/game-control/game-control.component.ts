import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.startGame();
  }

 @Input() startGame() {
    setInterval( this.startGame, 1000);
    console.log('Game Started');
  }

}

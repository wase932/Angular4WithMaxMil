import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 parentInterval: number;
 OddNumbers: number[] = [];
 EvenNumbers: number[] = [];

 countChange(event) {
  this.parentInterval = event;
  if (event % 2 !== 0) {
      this.OddNumbers.push(event);
  } else { this.EvenNumbers.push(event); }
 }
}

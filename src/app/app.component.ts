import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentButton = 'recipes';

  onMenuEventReceived(event) {
    this.currentButton = event;
  }
}

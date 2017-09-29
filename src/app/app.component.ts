import { ServerComponent } from './server/server.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServerComponent]
})
export class AppComponent {
  currentButton = 'recipes';

  constructor() {
  }
  onMenuEventReceived(event) {
    this.currentButton = event;
  }
}

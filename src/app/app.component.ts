import { ShoppintListService } from './services/shopping-list.service';
import { ServerComponent } from './server/server.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServerComponent, ShoppintListService]
})
export class AppComponent {
  currentButton = 'shoppingList';

  constructor(private shoppintListService: ShoppintListService) {
  }
  onMenuEventReceived(event) {
    this.currentButton = event;
  }
}

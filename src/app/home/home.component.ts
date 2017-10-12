import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public countDown = 5;
  private interval;
  constructor (private route: Router) {
  }

  ngOnInit() {
  }

  onLoadServer(id: number) {
      this.route.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit : 1 }} );
  }
}

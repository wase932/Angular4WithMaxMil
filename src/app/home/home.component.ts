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

  onAutomaticRoute() {
   this.interval = setInterval(() => {

      if (this.countDown > 0) {
     this.countDown --; }

     if (this.countDown === 0) {
      this.route.navigate(['/users']);
      clearInterval(this.interval);
    }
    }
    , 1000);
  }
}

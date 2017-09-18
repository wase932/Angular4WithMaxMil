import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  successMessage = 'You are so successful!';
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  warningMessage = 'This is a warning, you are in danger This is a warning, you are in danger This is a warning, you are in danger ';
  constructor() { }
  ngOnInit() {
  }


}

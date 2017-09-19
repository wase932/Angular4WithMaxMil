import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-directives',
  templateUrl: './assignment-directives.component.html',
  styleUrls: ['./assignment-directives.component.css']
})
export class AssignmentDirectivesComponent implements OnInit {
showDetails = false;
myArray = [];
myArrayInt = 0;
  constructor() {

  }

  ngOnInit() {
  }
  onBtnClick() {
    this.showDetails = !this.showDetails;
    this.myArray.push({value: 'New Item Added', index: this.myArrayInt ++});
    console.log(this.myArray.indexOf(this.myArrayInt));
  }

}

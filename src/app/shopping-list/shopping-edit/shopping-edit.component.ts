import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // Make Sure you do not reassign value to an @Input decorated property.
  // If you must, then you need to have the Two Way Binding Implemented.
  @Input() Ingredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

}

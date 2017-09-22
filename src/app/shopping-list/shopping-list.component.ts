import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredient[] = [];
  constructor() {
    this.Ingredients.push(
      new Ingredient('Apples', 4)
      , new Ingredient('Oranges', 1)
      , new Ingredient('Tomatoes', 12)
    );
  }
  ngOnInit() {
  }

}

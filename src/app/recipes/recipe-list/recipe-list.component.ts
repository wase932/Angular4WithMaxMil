import { Recipe } from './../recipe.model';
import { Component, OnInit, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  Recipes: Recipe[];
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
    this.Recipes = [new Recipe('Test Recipe'
      , 'This is a test recipe'
      // tslint:disable-next-line:max-line-length
      , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RtVx0juYB6U5B2vUhK3a7Xb9Z0I2PSzsphu6LdZC7RWoE1kbTA')];

      console.log('Initialized: Recipie-list Component');
  }

  addRecipe() {

    this.Recipes.push(new Recipe('Another Recipe'
    , 'This is a test recipe'
    // tslint:disable-next-line:max-line-length
    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RtVx0juYB6U5B2vUhK3a7Xb9Z0I2PSzsphu6LdZC7RWoE1kbTA'));
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }


}

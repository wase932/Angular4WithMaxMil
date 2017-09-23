import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  Recipes: Recipe[];
  constructor() { }

  ngOnInit() {
    this.Recipes = [new Recipe('Test Recipe'
      , 'This is a test recipe'
      // tslint:disable-next-line:max-line-length
      , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RtVx0juYB6U5B2vUhK3a7Xb9Z0I2PSzsphu6LdZC7RWoE1kbTA')];

      console.log('Ng On Init Called');
  }

  addRecipe() {

    this.Recipes.push(new Recipe('Test Recipe'
    , 'This is a test recipe'
    // tslint:disable-next-line:max-line-length
    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RtVx0juYB6U5B2vUhK3a7Xb9Z0I2PSzsphu6LdZC7RWoE1kbTA'));
  }


}

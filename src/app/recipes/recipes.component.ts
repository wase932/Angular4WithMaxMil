import { Recipe } from './recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() Recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(event) {
    this.Recipe = event;
  }

}
import { RecipeService } from './../../../services/recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;

  constructor( private recipeSvc: RecipeService) {
    this.recipe = this.recipeSvc.selectedRecipe;
   }

  ngOnInit() {
  }

  onRecipeItemClicked(recipe: Recipe) {
    this.recipeSvc.onSelectRecipe(recipe);
  }

}

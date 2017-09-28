import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../recipe.model';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor( private recipeSvc: RecipeService ) {
    this.recipe = this.recipeSvc.selectedRecipe;
   }
  ngOnInit() {
    this.recipeSvc.fireSelectedRecipe.subscribe(() => { this.recipe = this.recipeSvc.selectedRecipe; });
  }
}

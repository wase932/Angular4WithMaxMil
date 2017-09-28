import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  Recipes: Recipe[] = [];
  // @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor(private recipeSvc: RecipeService) {
    this.Recipes = this.recipeSvc.getRecipes();
   }

  ngOnInit() {
    this.recipeSvc.fireAddedRecipe.subscribe(() => { this.Recipes = this.recipeSvc.getRecipes(); });
  }

  addRecipe() {
    const recipe = new Recipe('Ogbono', 'Natures own blend', 'http://sisijemimah.com/wp-content/uploads/2015/07/ogbono-2.jpg');
    this.recipeSvc.addRecipe(recipe);
    }


}

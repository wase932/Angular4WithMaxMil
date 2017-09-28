import { OnInit, Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './../recipes/recipe.model';

@Injectable()
export class RecipeService implements OnInit {
recipeData: Recipe[] = [];
selectedRecipe: Recipe;

fireSelectedRecipe = new EventEmitter<void>();
fireAddedRecipe = new EventEmitter<void>();
    constructor() {
                    this.recipeData.push(
                    new Recipe('Ewedu Soup'
                    , 'A detailed look on how to mkae the Nigerian delicacy'
                    // tslint:disable-next-line:max-line-length
                    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RtVx0juYB6U5B2vUhK3a7Xb9Z0I2PSzsphu6LdZC7RWoE1kbTA')
                    , new Recipe('Garden Chowder'
                    , 'Everyone\'s favourite'
                    // tslint:disable-next-line:max-line-length
                    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RtVx0juYB6U5B2vUhK3a7Xb9Z0I2PSzsphu6LdZC7RWoE1kbTA')
                    );
    }

    ngOnInit() {

    }

    getRecipes() {
        return this.recipeData;
    }

    onSelectRecipe(recipe: Recipe) {
        this.selectedRecipe = recipe;
        this.fireSelectedRecipe.emit();
    }

    addRecipe(recipe: Recipe) {
        this.recipeData.push(recipe);
        this.fireAddedRecipe.emit();
    }
}

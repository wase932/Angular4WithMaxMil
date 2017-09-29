import { element } from 'protractor';
import { ShoppintListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { OnInit, Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './../recipes/recipe.model';

@Injectable()
export class RecipeService implements OnInit {
recipeData: Recipe[] = [];
selectedRecipe: Recipe;

fireSelectedRecipe = new EventEmitter<void>();
fireAddedRecipe = new EventEmitter<void>();
    constructor(private shoppingListSvc: ShoppintListService) {
                    this.recipeData.push(
                    new Recipe('Ewedu Soup'
                    , 'A detailed look on how to mkae the Nigerian delicacy'
                    // tslint:disable-next-line:max-line-length
                    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RtVx0juYB6U5B2vUhK3a7Xb9Z0I2PSzsphu6LdZC7RWoE1kbTA'
                    , [  new Ingredient('Ewedu Leaves', 1)
                       , new Ingredient('Maggi Cubes', 8)
                       , new Ingredient('Salt', 1)
                      ])

                    , new Recipe('Garden Chowder'
                    , 'Everyone\'s favourite'
                    // tslint:disable-next-line:max-line-length
                    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RtVx0juYB6U5B2vUhK3a7Xb9Z0I2PSzsphu6LdZC7RWoE1kbTA'
                    , [  new Ingredient('Corn', 3)
                    ,    new Ingredient('Water', 1)
                    ,    new Ingredient('Milk', 4)
                   ])
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

    sendRecipeIngredientsToShoppingCart(ingredients: Ingredient[]) {
        this.shoppingListSvc.addRecipeToShoppingList(ingredients);
        // console.log('Audit: Items Being Sent To the Shopping List Service:');
        // ingredients.forEach(element => {
        //     console.log( element.name + ' ' + element.quantity);
        // });
    }
}

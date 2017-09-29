import { Ingredient } from './../shared/ingredient.model';
import { OnInit, Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppintListService implements OnInit {

// ingredientItem: Ingredient = new Ingredient('', 0);
shoppingList: Ingredient[] = [];
fireAddIngredientItem = new EventEmitter<void>();
    constructor() {
        this.shoppingList.push(new Ingredient('Apples', 4)
        , ( new Ingredient('Oranges', 1))
        , ( new Ingredient('Tomatoes', 12))
    );
    }

    ngOnInit() {

    }

    getShoppingList() {
        console.log('Shopping List was called from the Service. Items: ' + this.shoppingList.length);
        return this.shoppingList;
    }

    addIngredientItem( ingredient: Ingredient) {
        this.shoppingList.push(ingredient);
        this.fireAddIngredientItem.emit();

    }

    addRecipeToShoppingList(ingredients: Ingredient[]) {

        console.log('Audit: Items of Old Contents of Shopping List Array:');
        this.shoppingList.forEach(element => {
            console.log( element.name + ' ' + element.quantity);
        });
        // Instead of using a foreach loop, and emitting unnecessary events, use an es 6 function "..." that converts an array to a list
        this.shoppingList.push(...ingredients);
        console.log('Audit: Items of New Contents of ShoppingList Array:');
        this.shoppingList.forEach(element => {
            console.log( element.name + ' ' + element.quantity);
        });

        this.fireAddIngredientItem.emit();
    }


}

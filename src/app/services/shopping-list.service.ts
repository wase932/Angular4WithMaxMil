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
        return this.shoppingList;
    }

    addIngredientItem( ingredient: Ingredient) {
        this.shoppingList.push(ingredient);
        this.fireAddIngredientItem.emit();

    }


}

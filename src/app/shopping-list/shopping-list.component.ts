import { ShoppintListService } from './../services/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ShoppingList: Ingredient[] = [];
  constructor(private shoppingListSvc: ShoppintListService) {
    this.ShoppingList = shoppingListSvc.getShoppingList();
  }

  ngOnInit() {
    this.shoppingListSvc.fireAddIngredientItem.subscribe( () => {this.ShoppingList = this.shoppingListSvc.getShoppingList(); } );
  }

}

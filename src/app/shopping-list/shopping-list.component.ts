import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ParentIngredient: Ingredient = {name: 'Parent Ingredient', quantity: 10};
  Ingredients: Ingredient[] = [];
  constructor() {
    this.Ingredients.push(
      new Ingredient('Apples', 4)
      , new Ingredient('Oranges', 1)
      , new Ingredient('Tomatoes', 12)
    );
  }
  ngOnInit() {
  }

}
// Angular LifeCycle Hooks:
/*
ngOnChanges(changes: SimpleChanges) {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
}

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
}

ngDoCheck() {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
}

ngAfterContentChecked() {
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  
}

ngAfterViewInit() {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
}

ngAfterViewChecked() {
  //Called after every check of the component's view. Applies to components only.
  //Add 'implements AfterViewChecked' to the class.
  
}

ngOnDestroy() {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  
}
*/
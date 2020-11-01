import { Component } from '@angular/core';
import { Ingredient } from 'src/app/commonModels/ingredient.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'shopping-list-component',
  templateUrl: './component.shoppingList.html',
  styleUrls: ['./component.shoppingList.css']
})
export class ShoppingListComponent {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Onions', 10)
  ];
}

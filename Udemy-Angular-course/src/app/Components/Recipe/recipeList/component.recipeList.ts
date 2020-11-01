import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'recipe-list-component',
  templateUrl: './component.recipeList.html',
  styleUrls: ['./component.recipeList.css']
})
export class RecipeListComponent implements OnInit {
public recipes: Recipe[] = [
  new Recipe('recipe test', 'recipe description test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563')
];
  constructor(){ }

  ngOnInit(){}
}

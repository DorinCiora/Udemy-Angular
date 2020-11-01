import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/Menu/menu.component';
import { RecipeComponent } from './Components/Recipe/recipe.component';
import { RecipeDetailComponent } from './Components/Recipe/recipeDetail/recipe-detail.component';
import { RecipeListComponent } from './Components/Recipe/recipeList/component.recipeList';
import { RecipeItemComponent } from './Components/Recipe/recipeList/recipeItem/recipe-item.component';
import { ShoppingEditComponent } from './Components/Shopping/shoppingEdit/shopping-edit.component';
import { ShoppingListComponent } from './Components/Shopping/shoppingList/component.shoppingList';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    // tslint:disable-next-line: max-line-length
    AppComponent,
    RecipeListComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    MenuComponent,
    RecipeComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

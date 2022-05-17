import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipesVisible = true;
  shoppingListVisible = false;

  showOnlyRecipes() {
    this.recipesVisible = true;
    this.shoppingListVisible = false;
  }

  showOnlyShoppingList() {
    this.recipesVisible = false;
    this.shoppingListVisible = true;
  }
  
}

import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() showRecipesEvent = new EventEmitter<boolean>();
    @Output() showShoppingListEvent = new EventEmitter<boolean>();

    onShowRecipes() {
        this.showRecipesEvent.emit(true);
    }
  
    onShowShoppingList() {
        this.showShoppingListEvent.emit(true);
    }
}
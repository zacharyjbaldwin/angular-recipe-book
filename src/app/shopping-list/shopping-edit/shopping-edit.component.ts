import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private shoppingListService: ShoppingListService) { }
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('f', {static: false}) shoppingListForm: NgForm; 

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(value.name, value.amount));
    } else {
      this.shoppingListService.addIngredient(new Ingredient(value.name, value.amount));
    }
    
    this.editMode = false;
    this.shoppingListForm.reset();


    // this.onAddIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value))
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
    this.onClear();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}

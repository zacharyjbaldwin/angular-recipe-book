import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent }
    ])
  ]
})
export class ShoppingListModule {}


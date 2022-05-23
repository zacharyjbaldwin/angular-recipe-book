import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor() {}


  // Subscribe the recipeSelected event from the RecipeService.
  // When the recipeSelected event is fired, change the selectedRecipe to the recipe data passed in the event.
  ngOnInit(): void {
  }

}

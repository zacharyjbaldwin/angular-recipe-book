import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  // This is the recipe that is selected.
  // Referenced in recipes.component.html
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}


  // Subscribe the recipeSelected event from the RecipeService.
  // When the recipeSelected event is fired, change the selectedRecipe to the recipe data passed in the event.
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}

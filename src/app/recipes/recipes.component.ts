import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}


  // Subscribe the recipeSelected event from the RecipeService.
  // When the recipeSelected event is fired, change the selectedRecipe to the recipe data passed in the event.
  ngOnInit(): void {
    // this.dataStorageService.fetchRecipes();
    this.dataStorageService.fetchRecipes().subscribe();
  }

}

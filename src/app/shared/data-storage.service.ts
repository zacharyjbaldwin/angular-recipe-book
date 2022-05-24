// https://recipe-book-69279-default-rtdb.firebaseio.com/

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipe-book-69279-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
      console.log(`storeRecipes() response: ${response}`);
    });
  }

  fetchRecipes() {
    const recipes = [];
    return this.http.get<Recipe[]>('https://recipe-book-69279-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
      });
    }),
    tap(recipes => {
      this.recipeService.setRecipes(recipes);
    }))
    // .subscribe((recipes) => {
    //   console.log(recipes);
    //   this.recipeService.setRecipes(recipes);
    // });
  }
}

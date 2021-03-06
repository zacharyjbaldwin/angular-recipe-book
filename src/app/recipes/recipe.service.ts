import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // new Recipe('Pizza', 'This is some good pizza!', 'https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg', [
    //   new Ingredient('dough', 1),
    //   new Ingredient('pepperoni', 5),
    //   new Ingredient('cheese', 1)
    // ]),
    // new Recipe('Big Fat Burger', 'The biggest fattest burger you\'ve seen!', 'https://2.bp.blogspot.com/-R3tZMeropuw/VIlDXR6iaVI/AAAAAAAAdiE/06kLJ9fPuPw/w1200-h630-p-k-no-nu/Skillet%2BBurger%2Bon%2Ba%2BBun%2BWM.jpg', [
    //   new Ingredient('buns', 2),
    //   new Ingredient('beef patty', 1),
    //   new Ingredient('cheese slice', 1),
    //   new Ingredient('pickles', 3)
    // ]),
    // new Recipe('Tequila Sunrise', 'A pretty cocktail', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fresh-home-made-tequila-sunrise-cocktails-royalty-free-image-1581697157.jpg', [
    //   new Ingredient('tequila', 1),
    //   new Ingredient('orange juice', 1),
    //   new Ingredient('grenadine', 1)
    // ])
  ];

  getRecipes() {
    // slice() makes sure that the array is a copy and not a reference to the actual recipes array
    return this.recipes.slice();

  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes);
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  constructor() { }
}

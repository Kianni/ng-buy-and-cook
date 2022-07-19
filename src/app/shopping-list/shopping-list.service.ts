import { EventEmitter, Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Ingredient } from "../shared/ingredient.model";

// @Injectable()
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ]

    // constructor(private recipeService: RecipeService){}

    getIngredients() {
        return this.ingredients.slice();
    }

      addIngredient(item: Ingredient) {
        this.ingredients.push(item);
        this.ingredientsChanged.emit(this.ingredients.slice())
      }

      addIngredients(ingredients: Ingredient[]){
      //   for (let ingredient of ingredients) {
      //     this.addIngredient(ingredient);
      // }
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice())
    }

    
}
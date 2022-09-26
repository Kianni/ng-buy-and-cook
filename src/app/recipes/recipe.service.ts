import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Proper dish',
      'This is just a test',
      'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
      [
        new Ingredient('Salmon', 2),
        new Ingredient('Potaoes', 7)
      ]
    ),
    new Recipe('Cabadge salad',
      'another description',
      'https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/jamaican-cabbage-salad-2.jpg',
      [
        new Ingredient('Cabadge', 1),
        new Ingredient('Smetana', 1),
        new Ingredient('Carrots', 5)
      ]
    ),
    new Recipe('Connecting people',
      'bla bla bla',
      'https://th.bing.com/th/id/R.9d4bdf69880211edb41b0f0a375a8094?rik=XhFOCD7cIHqTaA&riu=http%3a%2f%2fdividingmytime.typepad.com%2f.a%2f6a01287734c58f970c0147e228b1a2970b-600wi&ehk=BfLqAgNMrZZRLZqH19jHo1kwL5h4zSh%2fzn9NtClKBxM%3d&risl=&pid=ImgRaw&r=0',
      [
        new Ingredient('Vodka', 5)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipeByID(id: number) {
    return this.recipes[id]
  }
}
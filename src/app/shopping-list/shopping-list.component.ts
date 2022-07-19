import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )

    // this.recipeService.onAddComponents
    // .subscribe(
    //   (ingredients: Ingredient[])=>{
    //     ingredients.forEach(element => {
    //       this.shoppingListService.addIngredient(element)
    //     });
    //   }
    // )
  }

}

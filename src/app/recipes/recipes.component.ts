import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeSevrice: RecipeService) { }

  ngOnInit(): void {
    this.recipeSevrice.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.recipe = recipe;
        }
      )
  }

}
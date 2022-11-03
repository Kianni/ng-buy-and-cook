import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators/map";
import { tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    // storeRecipes(recipes: Recipe[]) {}
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://section-19-894a1-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
            .subscribe(response => console.log(response));
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://section-19-894a1-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(item => {
                    return { ...item, ingredients: item['ingredients'] ? item.ingredients : [] }
                })
            }),
                tap(recipes => this.recipeService.setRecipes(recipes))
            )
    }

}
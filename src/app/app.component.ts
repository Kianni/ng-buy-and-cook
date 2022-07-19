import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipesOn: boolean = true;
  shoppingListOn: boolean = false;

  // showRecipes(switchON: boolean){
  //   this.recipesOn = switchON;
  // }
  // showShoppingList(switchON: boolean){
  //   this.shoppingListOn = switchON;
  // }
}

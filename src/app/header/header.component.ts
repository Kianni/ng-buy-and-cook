import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    templateUrl: 'header.component.html',
    selector: 'app-header'
})
export class HeaderComponent{
    collapsed = true;
    @Output() onRecipes = new EventEmitter<boolean>();
    @Output() onShoppingList = new EventEmitter<boolean>();


    showRecipes(){
        this.onRecipes.emit(true);
        this.onShoppingList.emit(false);
    }

    showShoppingList(){
        this.onRecipes.emit(false);
        this.onShoppingList.emit(true);

    }
}

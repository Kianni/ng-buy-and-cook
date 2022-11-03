import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    templateUrl: 'header.component.html',
    selector: 'app-header'
})
export class HeaderComponent {
    collapsed = true;
    constructor(private dSS: DataStorageService) { }

    onSaveData() {
        this.dSS.storeRecipes()
    }

    onFetchData() {
        this.dSS.fetchRecipes().subscribe()
    }
}

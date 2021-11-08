import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeContainerComponent } from "./recipe-container/recipe-container.component";


const routes: Routes = [
    {
        path: '',
        component: RecipeContainerComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class recipeRoutingModule {}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingContainerComponent } from "./shopping-container/shopping-container.component";


const routes: Routes = [
    {
        path: '',
        component: ShoppingContainerComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShoppingRoutingModule {

}
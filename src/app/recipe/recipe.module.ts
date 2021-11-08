import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { recipeRoutingModule } from './recipe-routing.module';
import { RecipieItemComponent } from './recipie-item/recipie-item.component';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipieItemComponent,
    RecipeContainerComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    recipeRoutingModule
  ]
})
export class RecipeModule { }

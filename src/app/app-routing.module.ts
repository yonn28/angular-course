import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping', 
    loadChildren: () => import('./shopping/shopping.module')
        .then((m)=> m.ShoppingModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module')
        .then(m => m.RecipeModule)
  },
  {
    path: '**',
    redirectTo: 'shopping'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

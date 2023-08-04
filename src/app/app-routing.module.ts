import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from 'src/app/components/shopping-list/shopping-list.component';


const routes: Routes = [
  { path: '', component: ShoppingListComponent }, // Route d'accueil pour "shopping-list"
  // ... Ajoute ici d'autres routes si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
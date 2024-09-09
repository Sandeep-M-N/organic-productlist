import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { LoginComponent } from './components/login/login.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:ProductslistComponent,children:[
    {path:"vegetables",component:VegetablesComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

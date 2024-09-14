import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { LoginComponent } from './components/login/login.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { NutsComponent } from './components/nuts/nuts.component';
import { OilsComponent } from './components/oils/oils.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:ProductslistComponent,children:[
    {path:"vegetables",component:VegetablesComponent},
    {path:"fruits",component:FruitsComponent},
    {path:"nuts",component:NutsComponent},
    {path:"oils",component:OilsComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

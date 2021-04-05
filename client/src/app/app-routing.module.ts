import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { SinginComponent } from './components/singin/singin.component';

const routes: Routes = [
 
  {path: 'home', component:NavbarComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'singin', component:SinginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

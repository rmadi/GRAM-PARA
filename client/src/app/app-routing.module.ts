import { NgModule } from '@angular/core';
import { Router,RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { SinginComponent } from './components/singin/singin.component';

const routes: Routes = [
 
  {path: 'home', component:NavbarComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'singin', component:SinginComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router:Router){

  }
}

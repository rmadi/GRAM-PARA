import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { SinginComponent } from './components/singin/singin.component';

const routes: Routes = [
 
  {path: '', component:HomePageComponent},
  {path: 'home', component:HomePageComponent},

  {path: 'register', component:RegisterComponent},
  {path: 'singin', component:SinginComponent},
  {path: '**', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

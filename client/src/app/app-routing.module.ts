import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { SinginComponent } from './components/singin/singin.component';
import { ProductComponent } from './components/product/product.component';
import { addProductComponent } from './components/addProduct/addProduct.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
const routes: Routes = [
 
  {path: '', component:HomePageComponent},
  {path: 'home', component:HomePageComponent},
 {path:'product/:id', component:ProductComponent},

  {path: 'register', component:RegisterComponent},
  {path: 'singin', component:SinginComponent},
  {path: 'cart', component:CartComponent},
  {path:'payment', component:PaymentPageComponent},
  {path:'addProduct', component:addProductComponent},
  // {path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

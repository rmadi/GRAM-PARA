import { Component, NgModule } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
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
import { CategoriePageComponent } from './components/categorie-page/categorie-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SettingComponent } from './components/setting/setting.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'singin', component: SinginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/payment', component: PaymentPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addProduct', component: addProductComponent },
  { path: 'admin', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'categorie/:id', component: CategoriePageComponent },
  { path: 'admin/addProduct', component: addProductComponent },
  { path: 'admin/adminproduct', component: AdminProductsComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'admin/adminorders', component: AdminOrdersComponent },
  { path: 'setting', component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

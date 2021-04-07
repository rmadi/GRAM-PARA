import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriePageComponent } from './components/categorie-page/categorie-page.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { addProductComponent } from './components/addProduct/addProduct.component';
import { SinginComponent } from './components/singin/singin.component';
import { FormsModule } from '@angular/forms';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriePageComponent,
    ItemCardComponent,
    NavbarComponent,
    ProductComponent,
    HomePageComponent,
    FootbarComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    CartComponent,
    PaymentPageComponent,
    addProductComponent,
    RegisterComponent,
    SinginComponent,
    ProfilePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

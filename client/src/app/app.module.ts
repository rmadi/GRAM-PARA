import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriePageComponent } from './components/categorie-page/categorie-page.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import {ProductComponent} from './components/product/product.component';
import { FootbarComponent } from './components/footbar/footbar.component'


@NgModule({
  declarations: [
    AppComponent,

    CategoriePageComponent,
    ItemCardComponent,

    NavbarComponent,
    ProductComponent,
    FootbarComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

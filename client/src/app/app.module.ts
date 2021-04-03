import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriePageComponent } from './components/categorie-page/categorie-page.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriePageComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

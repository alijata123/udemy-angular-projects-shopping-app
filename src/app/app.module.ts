import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './header/recipe-book/recipe-book.component';
import { RecipeListComponent } from './header/shopping-list/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './header/shopping-list/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './header/shopping-list/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

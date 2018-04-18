import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {JokeComponent} from './joke/joke.component';
import {JokeListComponent} from './joke-list/joke-list.component';
import {JokeFormComponent} from './joke-form/joke-form.component';
import {HeaderComponent} from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { AlertComponent } from './alert/alert.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    HeaderComponent,
    CarouselComponent,
    CarouselItemComponent,
    AlertComponent,
    TabComponent,
    TabsComponent,
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

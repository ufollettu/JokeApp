import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {JokeComponent} from './joke/joke.component';
import {JokeListComponent} from './joke-list/joke-list.component';
import {JokeFormComponent} from './joke-form/joke-form.component';
import {HeaderComponent} from './header/header.component';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselItemComponent} from './carousel-item/carousel-item.component';
import {AlertComponent} from './alert/alert.component';
import {TabComponent} from './tab/tab.component';
import {TabsComponent} from './tabs/tabs.component';
import {ArticleComponent} from './article/article.component';
import {ArticlesComponent} from './articles/articles.component';
import {CcCardHoverDirective} from './cc-card-hover.directive';
import {RolloverDirective} from './rollover.directive';
import {FormAppComponent} from './form-app/form-app.component';
import {AsyncPipeComponent} from './async-pipe/async-pipe.component';
import {DefaultPipe} from './default.pipe';
import {DefaultMultiplePipe} from './default-multiple.pipe';
import {CleanPipePipe} from './clean-pipe.pipe';
import {ModelFormComponent} from './model-form/model-form.component';
import {ReactiveModelFormComponent} from './reactive-model-form/reactive-model-form.component';
import {TemplateFormComponent} from './template-form/template-form.component';


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
    ArticlesComponent,
    CcCardHoverDirective,
    RolloverDirective,
    FormAppComponent,
    AsyncPipeComponent,
    DefaultPipe,
    DefaultMultiplePipe,
    CleanPipePipe,
    ModelFormComponent,
    ReactiveModelFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

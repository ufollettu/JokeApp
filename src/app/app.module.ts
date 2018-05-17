import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, Response, RequestOptions, Headers, HttpModule, JsonpModule} from '@angular/http';

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
import {ParentComponentComponent} from './parent-component/parent-component.component';
import {ChildComponentComponent} from './child-component/child-component.component';
import {SimpleService} from './simple-service';
import {JokeService} from './joke.service';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { ItunesSearchComponent } from './itunes-search/itunes-search.component';
import {SearchServiceService} from './search-service.service';
import {SearchService} from './search.service';
import { HttpExerciseComponent } from './http-exercise/http-exercise.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import {AlwaysAuthGuard} from "./always-auth-guard";
import {UserService} from "./user.service";
import {OnlyLoggedInUserGuard} from "./only-logged-in-user-guard";
import {AlwaysAuthChildrenGuard} from "./always-auth-children-guard";
import {UnsearchedTermGuard} from "./unsearched-term-guard";
import { ArtistMusicVideoListComponent } from './artist-music-video-list/artist-music-video-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'find', redirectTo: 'search'},
  {
    path: 'search',
    component: SearchComponent,
    canDeactivate: [UnsearchedTermGuard]
  },
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    canActivate: [OnlyLoggedInUserGuard, AlwaysAuthGuard],
    canActivateChild: [AlwaysAuthChildrenGuard],
    children: [
      {path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent},
      {path: 'videos', component: ArtistMusicVideoListComponent}
    ]
  },
  {path: '**', component: HomeComponent}
];

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
    TemplateFormComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    HttpDemoComponent,
    ItunesSearchComponent,
    HttpExerciseComponent,
    SearchComponent,
    HomeComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    ArtistMusicVideoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    SimpleService,
    JokeService,
    SearchServiceService,
    SearchService,
    UserService,
    OnlyLoggedInUserGuard,
    AlwaysAuthGuard,
    AlwaysAuthChildrenGuard,
    UnsearchedTermGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [
    new Article("Title 1", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula", new Date(), "text"),
    new Article("Title 2", "https://unsplash.it/400?image=10", new Date(), "image"),
    new Article("Title 3", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula", new Date(), "text"),
    new Article("Title 4", "https://unsplash.it/400?image=20", new Date(), "image"),
    new Article("Title 5", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula", new Date(), "text"),
    new Article("Title 6", "https://unsplash.it/400?image=30", new Date(), "image")
  ];

  constructor() { }

  ngOnInit() {
  }
}

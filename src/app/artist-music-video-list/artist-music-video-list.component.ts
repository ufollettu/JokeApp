import {Component, OnInit} from '@angular/core';
import {Jsonp} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist-music-video-list',
  templateUrl: './artist-music-video-list.component.html',
  styleUrls: ['./artist-music-video-list.component.css']
})
export class ArtistMusicVideoListComponent implements OnInit {
  private videos: any[];

  constructor(private jsonp: Jsonp,
              private route: ActivatedRoute) {
    this.route.parent.params.subscribe(
      params => {
        this.jsonp.request(
          `https://itunes.apple.com/lookup?id=${params["artistId"]}&entity=musicVideo&callback=JSONP_CALLBACK`,
        )
          .toPromise()
          .then(
            res => {
              console.log(res.json());
              this.videos = res.json().results.slice(1);
            });
      });
  }

  ngOnInit() {
  }

}

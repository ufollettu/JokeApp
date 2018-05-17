import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMusicVideoListComponent } from './artist-music-video-list.component';

describe('ArtistMusicVideoListComponent', () => {
  let component: ArtistMusicVideoListComponent;
  let fixture: ComponentFixture<ArtistMusicVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMusicVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMusicVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

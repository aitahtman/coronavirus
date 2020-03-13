import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  watcher: Subscription;
  activeMediaQuery = '';
  mapHeight: Number


  constructor(private mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      console.log(change)
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      this.mapHeight = ['sm', 'xs'].includes(change.mqAlias) ? 60 : 100

    })
  }
}




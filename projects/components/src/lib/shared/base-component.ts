import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: ''
})
export class BaseComponent implements OnDestroy {
  subs: Subscription[] = [];

  ngOnDestroy() {
    this.subs.forEach((x) => {
      x.unsubscribe();
    });
  }
}

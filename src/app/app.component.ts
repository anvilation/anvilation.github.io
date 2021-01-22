import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>`

})
export class AppComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.ngUnsubscribe))
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => { window.scrollTo(0, 0); });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

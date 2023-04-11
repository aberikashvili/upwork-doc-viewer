import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: '',
})
export class BaseComponent implements OnDestroy {
  protected _destroy$$: Subject<void> = new Subject();

  ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }
}

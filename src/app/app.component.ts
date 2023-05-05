import { Component, OnDestroy, OnInit } from '@angular/core';

import { DocumentEntry } from './models/document-entry.model';
import { DataService } from './services/data.service';
import { BaseComponent } from './components/base.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {
  doc!: DocumentEntry;

  constructor(private _dataService: DataService) {
    super();
  }

  ngOnInit(): void {
    this._dataService
      .loadData()
      .pipe(takeUntil(this._destroy$$))
      .subscribe((data: DocumentEntry) => (this.doc = data));
  }
}

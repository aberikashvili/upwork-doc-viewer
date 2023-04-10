import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DocumentEntry } from 'src/app/models/document-entry.model';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerComponent implements OnInit, OnDestroy {
  @Input() documentObj!: DocumentEntry;

  ngOnInit(): void {
    console.log(this.documentObj);
  }

  ngOnDestroy(): void {}
}

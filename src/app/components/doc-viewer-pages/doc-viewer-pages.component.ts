import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DocumentPageEntry } from 'src/app/models/document-page-entry.model';

@Component({
  selector: 'app-doc-viewer-pages',
  templateUrl: './doc-viewer-pages.component.html',
  styleUrls: ['./doc-viewer-pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerPagesComponent implements OnInit {
  @Input() pages!: DocumentPageEntry[];

  ngOnInit(): void {
    console.log('PAGES', this.pages);
  }
}

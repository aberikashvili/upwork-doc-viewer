import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DocumentPageEntry } from 'src/app/models/document-page-entry.model';

@Component({
  selector: 'app-doc-viewer-page',
  templateUrl: './doc-viewer-page.component.html',
  styleUrls: ['./doc-viewer-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerPageComponent implements OnInit {
  @Input() page!: DocumentPageEntry;

  ngOnInit(): void {
    console.log('PAGE', this.page);
  }

  pageCliked(event: MouseEvent): void {
    debugger;
  }
}

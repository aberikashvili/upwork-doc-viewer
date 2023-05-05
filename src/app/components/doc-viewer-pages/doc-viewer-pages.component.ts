import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
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

  @ViewChild('pagesWrapperDiv') pagesWrapperDiv!: ElementRef;

  ngOnInit(): void {
    console.log('PAGES', this.pages);
  }

  setZoom(zoom: number): void {
    const browser = ['webkit', 'moz', 'ms', 'o'];
    const scale = 'scale(' + zoom / 100 + ')';
    const origin = 'top center';

    for (var i = 0; i < browser.length; i++) {
      this.pagesWrapperDiv.nativeElement.style[browser[i] + 'Transform'] =
        scale;
      this.pagesWrapperDiv.nativeElement.style[browser[i] + 'TransformOrigin'] =
        origin;
    }

    this.pagesWrapperDiv.nativeElement.style['transform'] = scale;
    this.pagesWrapperDiv.nativeElement.style['transformOrigin'] = origin;
  }
}

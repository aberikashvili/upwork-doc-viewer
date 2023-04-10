import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DEFAULT_ZOOM, ZOOM_STEP } from 'src/app/constants/zoom.constants';
import { DocumentEntry } from 'src/app/models/document-entry.model';
import { DocViewerPagesComponent } from '../doc-viewer-pages/doc-viewer-pages.component';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerComponent implements OnInit, OnDestroy {
  @Input() documentObj!: DocumentEntry;

  @ViewChild(DocViewerPagesComponent) pagesWrapper!: ElementRef;

  private _currentZoom: number = DEFAULT_ZOOM;

  ngOnInit(): void {
    console.log(this.documentObj);
  }

  ngOnDestroy(): void {}

  onZoomIn(): void {
    this._currentZoom = this._currentZoom + ZOOM_STEP;
    this.setZoom(this._currentZoom, this.pagesWrapper.nativeElement);
  }

  onZoomOut(): void {
    this._currentZoom = this._currentZoom - ZOOM_STEP;
    this.setZoom(this._currentZoom, this.pagesWrapper.nativeElement);
  }

  setZoom(zoom: number, el: any): void {
    const transformOrigin = [0, 0];
    // el = el || instance.getContainer();
    var p = ['webkit', 'moz', 'ms', 'o'],
      s = 'scale(' + zoom + ')',
      oString =
        transformOrigin[0] * 100 + '% ' + transformOrigin[1] * 100 + '%';

    for (var i = 0; i < p.length; i++) {
      el.style[p[i] + 'Transform'] = s;
      el.style[p[i] + 'TransformOrigin'] = oString;
    }

    el.style['transform'] = s;
    el.style['transformOrigin'] = oString;
  }
}

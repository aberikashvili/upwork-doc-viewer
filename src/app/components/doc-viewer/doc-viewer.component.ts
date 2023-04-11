import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  DEFAULT_ZOOM,
  MAX_ZOOM,
  MIN_ZOOM,
  ZOOM_STEP,
} from 'src/app/constants/zoom.constants';
import { DocumentEntry } from 'src/app/models/document-entry.model';
import { DocViewerPagesComponent } from '../doc-viewer-pages/doc-viewer-pages.component';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerComponent implements OnInit, OnDestroy {
  @Input() documentObj!: DocumentEntry;

  @ViewChild(DocViewerPagesComponent) pagesWrapper!: DocViewerPagesComponent;

  currentZoom: number = DEFAULT_ZOOM;

  ngOnInit(): void {
    console.log(this.documentObj);
  }

  ngOnDestroy(): void {}

  onZoomIn(): void {
    this.currentZoom = this.currentZoom + ZOOM_STEP;

    if (this.currentZoom > MAX_ZOOM) {
      this.currentZoom -= ZOOM_STEP;
      return;
    }

    this.pagesWrapper.setZoom(this.currentZoom);
  }

  onZoomOut(): void {
    this.currentZoom = this.currentZoom - ZOOM_STEP;

    if (this.currentZoom < MIN_ZOOM) {
      this.currentZoom += ZOOM_STEP;
      return;
    }

    this.pagesWrapper.setZoom(this.currentZoom);
  }

  onSaved(): void {
    const dataToSave = this.documentObj.pages
      .map((page) => {
        const notes = page.notes.map((note) => ({
          page: page.index,
          type: note.type,
          content: note.content,
          coords: { x: note.posX, y: note.posY },
        }));

        return notes;
      })
      .map((item) => item[0])
      .filter((item) => !!item);

    console.log('Data to save', dataToSave);
  }
}

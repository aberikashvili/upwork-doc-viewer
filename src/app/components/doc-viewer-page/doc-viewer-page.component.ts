import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ElementRef,
} from '@angular/core';
import { DocumentNoteEntry } from 'src/app/models/document-note-entry.model';
import { DocumentPageEntry } from 'src/app/models/document-page-entry.model';

@Component({
  selector: 'app-doc-viewer-page',
  templateUrl: './doc-viewer-page.component.html',
  styleUrls: ['./doc-viewer-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerPageComponent implements OnInit {
  @Input() page!: DocumentPageEntry;

  constructor(private _element: ElementRef) {}

  ngOnInit(): void {
    console.log('PAGE', this.page);
  }

  pageCliked(event: MouseEvent): void {
    const { pageX, pageY } = event;
    const pos = this._calculatePosX(pageX, pageY);

    this.page.notes.push({
      posX: pos.x,
      posY: pos.y,
      editMode: true,
    } as DocumentNoteEntry);
  }

  private _calculatePosX(
    pageX: number,
    pageY: number
  ): { x: number; y: number } {
    const elementRect = this._element.nativeElement.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    const elementOffsetTop = elementRect.top - bodyRect.top;
    const elementOffsetLeft = elementRect.left - bodyRect.left;

    return { x: pageX - elementOffsetLeft, y: pageY - elementOffsetTop };
  }
}

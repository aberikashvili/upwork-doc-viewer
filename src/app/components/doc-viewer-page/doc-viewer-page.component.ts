import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ElementRef,
} from '@angular/core';
import * as uuid from 'uuid';
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
      uuid: uuid.v4(),
      posX: pos.x,
      posY: pos.y,
      editMode: true,
    } as DocumentNoteEntry);
  }

  noteRemoved(noteUuid: string): void {
    const note = this.page.notes.find((item) => item.uuid === noteUuid);

    if (!note) {
      return;
    }

    const noteIndex = this.page.notes.indexOf(note);

    this.page.notes.splice(noteIndex, 1);
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

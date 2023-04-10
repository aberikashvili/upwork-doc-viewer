import { Component, Input } from '@angular/core';
import { DocumentNoteEntry } from 'src/app/models/document-note-entry.model';
import { NotePositionEntry } from 'src/app/models/note-position-entry.model';

@Component({
  selector: 'app-doc-viewer-note',
  templateUrl: './doc-viewer-note.component.html',
  styleUrls: ['./doc-viewer-note.component.scss'],
})
export class DocViewerNoteComponent {
  @Input() note!: DocumentNoteEntry;

  get position(): NotePositionEntry {
    return {
      top: `${this.note.posY}px`,
      left: `${this.note.posX}px`,
    } as NotePositionEntry;
  }
}

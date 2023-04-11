import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentNoteEntry } from 'src/app/models/document-note-entry.model';
import { NotePositionEntry } from 'src/app/models/note-position-entry.model';

@Component({
  selector: 'app-doc-viewer-note',
  templateUrl: './doc-viewer-note.component.html',
  styleUrls: ['./doc-viewer-note.component.scss'],
})
export class DocViewerNoteComponent {
  @Input() note!: DocumentNoteEntry;

  @Output() removed: EventEmitter<string> = new EventEmitter();

  get position(): NotePositionEntry {
    return {
      top: `${this.note.posY}px`,
      left: `${this.note.posX}px`,
    } as NotePositionEntry;
  }

  get isText(): boolean {
    return this.note.type === 'text';
  }

  get isImage(): boolean {
    return this.note.type === 'image';
  }

  remove(): void {
    this.removed.emit(this.note.uuid);
  }

  noteCreated(note: DocumentNoteEntry): void {
    this.note = { ...this.note, ...note };
  }
}

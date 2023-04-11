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
      transform: 'none',
      top: 0,
      left: 0,
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

  dragEnded(dragEvent: any): void {
    this.note = {
      ...this.note,
      posX: this.note.posX + dragEvent.distance.x,
      posY: this.note.posY + dragEvent.distance.y,
    };
  }
}

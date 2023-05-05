import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { DocumentNoteEntry } from 'src/app/models/document-note-entry.model';
import { NullableNoteType } from 'src/app/types/note-nullable.type';
import { NoteType } from 'src/app/types/note.type';

@Component({
  selector: 'app-doc-viewer-note-wizard',
  templateUrl: './doc-viewer-note-wizard.component.html',
  styleUrls: ['./doc-viewer-note-wizard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerNoteWizardComponent {
  @Output() created: EventEmitter<DocumentNoteEntry> = new EventEmitter();

  noteType: NullableNoteType = null;

  noteValue: string | ArrayBuffer | null = null;

  setType(option: NoteType): void {
    this.noteType = option;
  }

  fileSelected(event: any): void {
    const [file] = event.target.files;

    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.noteValue = fileReader.result;
        this._endCreate();
      };

      fileReader.readAsDataURL(file);
    }
  }

  enterPresset(): void {
    this._endCreate();
  }

  private _endCreate(): void {
    this.created.emit({
      type: this.noteType,
      content: this.noteValue,
      editMode: false,
    } as DocumentNoteEntry);
  }
}

import { DocumentNoteEntry } from './document-note-entry.model';

export interface DocumentPageEntry {
  index: number;

  image: string;

  notes: DocumentNoteEntry[];
}

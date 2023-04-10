import { DocumentPageEntry } from './document-page-entry.model';

export interface DocumentEntry {
  title: string;

  pages: DocumentPageEntry[];
}

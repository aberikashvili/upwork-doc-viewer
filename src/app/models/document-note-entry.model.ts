import { NoteType } from '../types/note.type';

export interface DocumentNoteEntry {
  uuid: string;

  type: NoteType;

  /**
   * In case of type: 'text', content is text to display
   * In case of type: 'image', content is image src
   */
  content: string;

  posX: number;

  posY: number;

  editMode: boolean;
}

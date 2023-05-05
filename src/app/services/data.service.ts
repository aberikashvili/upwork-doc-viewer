import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { Observable, of } from 'rxjs';
import { DocumentEntry } from '../models/document-entry.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  loadData(): Observable<DocumentEntry> {
    return of({
      title: 'test doc',
      pages: [
        {
          index: 1,
          image: '/assets/1.png',
          notes: [
            {
              uuid: uuid.v4(),
              type: 'text',
              content: 'test note',
              posX: 100,
              posY: 100,
            },
          ],
        },
        {
          index: 2,
          image: '/assets/2.png',
          notes: [
            {
              uuid: uuid.v4(),
              type: 'text',
              content: '2nd page note',
              posX: 340,
              posY: 230,
            },
          ],
        },
        { index: 3, image: '/assets/3.png', notes: [] },
        { index: 4, image: '/assets/4.png', notes: [] },
        { index: 5, image: '/assets/5.png', notes: [] },
      ],
    } as DocumentEntry);
  }
}

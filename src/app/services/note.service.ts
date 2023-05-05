import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  calculatePosition(
    pageX: number,
    pageY: number,
    elementRect: any
  ): { x: number; y: number } {
    const bodyRect = document.body.getBoundingClientRect();
    const elementOffsetTop = elementRect.top - bodyRect.top;
    const elementOffsetLeft = elementRect.left - bodyRect.left;

    return { x: pageX - elementOffsetLeft, y: pageY - elementOffsetTop };
  }
}

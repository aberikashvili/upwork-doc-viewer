import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'asPercent' })
export class AsPercentPipe implements PipeTransform {
  transform(value: number): string {
    return `${value}%`;
  }
}

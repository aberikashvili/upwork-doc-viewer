import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-doc-viewer-header',
  templateUrl: './doc-viewer-header.component.html',
  styleUrls: ['./doc-viewer-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerHeaderComponent {
  @Input() title!: string;

  @Output() zoomedIn: EventEmitter<void> = new EventEmitter();
  @Output() zoomedOut: EventEmitter<void> = new EventEmitter();

  zoomIn(): void {
    this.zoomedIn.emit();
  }

  zoomOut(): void {
    this.zoomedOut.emit();
  }
}

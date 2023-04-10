import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-doc-viewer-header',
  templateUrl: './doc-viewer-header.component.html',
  styleUrls: ['./doc-viewer-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerHeaderComponent {
  @Input() title!: string;
}

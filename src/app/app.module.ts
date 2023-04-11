import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocViewerComponent } from './components/doc-viewer/doc-viewer.component';
import { DocViewerHeaderComponent } from './components/doc-viewer-header/doc-viewer-header.component';
import { DocViewerPagesComponent } from './components/doc-viewer-pages/doc-viewer-pages.component';
import { DocViewerPageComponent } from './components/doc-viewer-page/doc-viewer-page.component';
import { DocViewerNoteComponent } from './components/doc-viewer-note/doc-viewer-note.component';
import { FormsModule } from '@angular/forms';
import { AsPercentPipe } from './pipes/as-percent.pipe';
import { DocViewerNoteWizardComponent } from './components/doc-viewer-note-wizard/doc-viewer-note-wizard.component';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    DocViewerComponent,
    DocViewerHeaderComponent,
    DocViewerPagesComponent,
    DocViewerPageComponent,
    DocViewerNoteComponent,
    DocViewerNoteWizardComponent,

    // Pipes
    AsPercentPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

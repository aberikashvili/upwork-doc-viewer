import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocViewerComponent } from './components/doc-viewer/doc-viewer.component';
import { DocViewerHeaderComponent } from './components/doc-viewer-header/doc-viewer-header.component';

@NgModule({
  declarations: [AppComponent, DocViewerComponent, DocViewerHeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

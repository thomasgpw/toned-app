import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultImageComponent } from './result-image/result-image.component';
import { ColorSelectionFormComponent } from './color-selection-form/color-selection-form.component';
import { ImageSelectionFormComponent } from './image-selection-form/image-selection-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultImageComponent,
    ColorSelectionFormComponent,
    ImageSelectionFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

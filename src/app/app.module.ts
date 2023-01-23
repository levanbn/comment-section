import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { WriteSectionComponent } from './write-section/write-section.component';
import { ReplySectionComponent } from './comment-section/reply-section/reply-section.component';
import json from '../assets/data/data.json';
@NgModule({
  declarations: [
    AppComponent,
    CommentSectionComponent,
    WriteSectionComponent,
    ReplySectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


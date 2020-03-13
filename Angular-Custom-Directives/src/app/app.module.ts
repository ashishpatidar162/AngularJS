import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoundBlockDirective } from './round-block.directive';
import { EmojiDirective } from './emoji.directive';

@NgModule({
  declarations: [
    AppComponent,
    RoundBlockDirective,
    EmojiDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

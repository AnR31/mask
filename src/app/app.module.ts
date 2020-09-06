import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { GotoDirective } from './goto.directive';

@NgModule({
  declarations: [AppComponent, GotoDirective],
  imports: [BrowserModule, TextMaskModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

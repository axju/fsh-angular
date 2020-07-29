import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { SafeHtmlPipe } from './safe-html';
import { SnippetOfDayComponent } from './components/snippet-of-day/snippet-of-day.component';

@NgModule({
  declarations: [
    AppComponent,
    SnippetsComponent,
    SafeHtmlPipe,
    SnippetOfDayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

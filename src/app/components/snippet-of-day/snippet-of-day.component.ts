import { Component, OnInit } from '@angular/core';
import { Snippet } from '../../models/snippet';
import { SnippetService } from '../../service/snippet.service';

@Component({
  selector: 'app-snippet-of-day',
  templateUrl: './snippet-of-day.component.html',
  styleUrls: ['./snippet-of-day.component.css']
})
export class SnippetOfDayComponent implements OnInit {

  snippet: Snippet;

  constructor(private snippetService: SnippetService) { }

  ngOnInit() {
    this.getSnippet();
  }

  getSnippet(): void {
    this.snippetService.getSnippetOfDay()
    .subscribe(snippet => this.snippet = snippet);
  }

}

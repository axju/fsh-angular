import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Snippet } from '../../models/snippet';
import { SnippetService } from '../../service/snippet.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SnippetsComponent implements OnInit {

  snippets: Snippet[];
  count: number;
  next: string;
  previous: string;

  constructor(private snippetService: SnippetService) { }

  ngOnInit() {
    this.getSnippets();
  }

  getSnippets(): void {
    this.snippetService.getSnippets().subscribe(snippets => {
      this.snippets = snippets.results;
      this.count = snippets.count;
      this.next = snippets.next;
      this.previous = snippets.previous;
    });
  }

  loadMore(): void {
    console.log(this.count, this.next, this.previous);
  }
}

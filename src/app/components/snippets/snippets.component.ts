import { Component, OnInit } from '@angular/core';
import { Snippet } from '../../models/snippet';
import { SnippetService } from '../../service/snippet.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {

  snippets: Snippet[];

  constructor(private snippetService: SnippetService) { }

  ngOnInit() {
    this.getSnippets();
  }

  getSnippets(): void {
    this.snippetService.getSnippets()
    .subscribe(snippets => this.snippets = snippets);
  }

}

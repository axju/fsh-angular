import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Snippet }         from '../../models/snippet';
import { SnippetService }  from '../../service/snippet.service';


@Component({
  selector: 'app-snippet-detail',
  templateUrl: './snippet-detail.component.html',
  styleUrls: ['./snippet-detail.component.css']
})
export class SnippetDetailComponent implements OnInit {
  snippet: Snippet;

  constructor(
    private route: ActivatedRoute,
    private snippetService: SnippetService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSnippet();
  }

  getSnippet(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.snippetService.getSnippet(id).subscribe(snippet => this.snippet = snippet);
  }

  goBack(): void {
    this.location.back();
  }

  like(): void {
    this.snippetService.likeSnippet(this.snippet.id).subscribe(snippet => this.snippet = snippet);
  }

}

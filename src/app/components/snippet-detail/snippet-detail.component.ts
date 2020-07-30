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

  @Input() snippet: Snippet;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private snippetService: SnippetService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (!this.snippet) {
      this.getSnippet();
    }
    console.log(this.snippet);

  }

  getSnippet(): void {
    this.snippetService.getSnippet(this.id).subscribe(snippet => this.snippet = snippet);
  }

  goBack(): void {
    this.location.back();
  }

  like(): void {
    console.log('thirst:', this.snippet);
    this.snippetService.likeSnippet(this.snippet.id).subscribe(snippet => this.snippet = snippet);
    console.log('secend:', this.snippet);
  }

}

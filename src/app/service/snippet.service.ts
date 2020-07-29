import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Snippet } from '../models/snippet';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  private URL = 'http://localhost:8000/snippets/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSnippets(): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(this.URL)
  }
}

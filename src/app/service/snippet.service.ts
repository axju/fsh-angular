import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Snippet } from '../models/snippet';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  private URL = `${environment.apiUrl}snippets/`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSnippets(): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(this.URL)
  }

  getSnippetOfDay(): Observable<Snippet> {
    return this.http.get<Snippet>(this.URL + 'today')
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getSnippets(): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(this.URL)
  }

  getSnippetOfDay(): Observable<Snippet> {
    return this.http.get<Snippet>(this.URL + 'today')
  }

  getSnippet(id: number): Observable<Snippet> {
    const url = `${this.URL}${id}`;
    return this.http.get<Snippet>(url);//.pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<Snippet>(`getHero id=${id}`))
    // );
  }

  likeSnippet(id: number): Observable<Snippet> {
    const url = `${this.URL}${id}/like/`;
    return this.http.get<Snippet>(url);
  }
}

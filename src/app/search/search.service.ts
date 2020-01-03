import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  private readonly maxResults = 20;

  constructor( private http: HttpClient ) { }

  public getBooks(keyword: string): Observable<any> {
    if( typeof keyword !== 'string' ) {
      throw new Error('Invalid type');
      // return new Observable;
    }
    const booksUrl = this.baseUrl + `${keyword}` +`&&maxResults=${this.maxResults}`;
    const books = this.http.get(booksUrl);
    return books;
  }

}

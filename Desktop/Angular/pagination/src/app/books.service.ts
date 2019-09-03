import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Book } from './model/book.interface';
import { Book } from '../model/book.interface';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  getBooks(postsPerPage: number, pageNumber: number): Observable<Book> {
    // console.log('http://localhost:3000/books?_limit='+postsPerPage+'&page='+pageNumber);
    return this.httpClient.get<Book>('http://localhost:3000/books?_limit='+postsPerPage+'&_page='+pageNumber);
  }
}

// http://localhost:3000/books?_limit=5&_page=3


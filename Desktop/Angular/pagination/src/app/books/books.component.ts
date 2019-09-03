import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { PageEvent } from '@angular/material/paginator';
import { Book } from './model/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  totalPosts = 200;
  postsPerPage = 5;
  pageSizeOptions = [5, 10];
  pageNumber = 0;
  books: Book;

   constructor(private booksService: BooksService) { }

  ngOnInit() {
     this.booksService.getBooks(this.postsPerPage, this.pageNumber+1).subscribe(books => this.books = books);
  }

  onChangedPage(pageData: PageEvent) {
    console.log('Page No. ', pageData, ' ', );
    this.pageNumber = pageData.pageIndex;
    this.postsPerPage = pageData.pageSize;
    this.booksService.getBooks(this.postsPerPage, this.pageNumber+1).subscribe(books => {
      this.books = books
      console.log(this.books);
    });
  }

}

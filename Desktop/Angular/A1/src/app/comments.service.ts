import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from './model/comments.interface';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getcomments(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>("https://jsonplaceholder.typicode.com/comments");
   }
   //getComment(commentsNumber: number):Observable<Comments>{
    //return this.httpClient.get<Comments>('https://jsonplaceholder.typicode.com/comments');
  //}
 //commentComments(comment: Comments): Observable<Comments> {
   //return this.httpClient.Comment<Comments>('https://jsonplaceholder.typicode.com/comments', Comment);
//}
getComment(id: number): Observable<Comments>{
  return this.httpClient.get<Comments>('https://jsonplaceholder.typicode.com/comments/'+id);
}

}


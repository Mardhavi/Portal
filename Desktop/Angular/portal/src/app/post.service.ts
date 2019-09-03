import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, Profile} from './model/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient
  ) { }
getproject(ID: number): Observable<Project>{
  console.log('http://localhost:3000/books/'+ID);
  return this.httpClient.get<Project>('http://localhost:3000/books/'+ID);
}
  getprojects(): Observable<Project[]> {
return this.httpClient.get<Project[]>('http://localhost:3000/books');
  }
  deleteProject(id:number): Observable<Project>{
    console.log('http://localhost:3000/books/' + id);
   return this.httpClient.delete<Project>('http://localhost:3000/books/' + id);
  }

  getprofile(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>('http://localhost:3000/profile');
      }

  //   putDetail( profile: any): Observable<any>{
  //   return this.httpClient.put<any>('http://localhost:3000/profile' + profile.id , profile);
  // }
    }

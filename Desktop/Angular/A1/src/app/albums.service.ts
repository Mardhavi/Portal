import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from './model/albums.interface';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  constructor(
    private httpClient: HttpClient
  ) { }
  getalbums(): Observable<Albums[]> {
    return this.httpClient.get<Albums[]>("https://jsonplaceholder.typicode.com/albums");
   }
   getAlbum(id: number): Observable<Albums>{
    return this.httpClient.get<Albums>('https://jsonplaceholder.typicode.com/albums/'+id);

}
}

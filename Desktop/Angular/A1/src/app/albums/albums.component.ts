import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Albums } from '../model/albums.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Albums[];
  //albums: any;

  constructor(
    private albumsService: AlbumsService
  ) { }
 
  ngOnInit() {
    this.albumsService.getalbums().subscribe(albums => {
      this.albums = albums;
    }
    );
    }
  }

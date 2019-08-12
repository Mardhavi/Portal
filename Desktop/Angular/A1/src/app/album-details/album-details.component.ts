import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Albums } from '../model/albums.interface';
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album:Albums;
  constructor( private activatedRoute: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pmap =>{
      //console.log('pmap ', +pmap.get('id'));
      this.albumsService.getAlbum(+pmap.get('id')).subscribe(album =>{
        this.album = album;
      });
  });

  }

}
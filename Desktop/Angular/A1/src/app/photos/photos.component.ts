import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photos } from '../model/photos.interface';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  disablePrev: boolean = true;
  disableNext: boolean = false;
  photoNumber: number=1;
  photos: Photos[];
  photo: Photos;
  setAttribute: boolean;
  removeAttribute: boolean;

  constructor(
    private photosService: PhotosService
  ) 
  { }

  ngOnInit() {
    this.photosService.getPhoto(this.photoNumber).subscribe(photo =>{
      this.photo = photo;
  }
    );
}
    onPrev(){
      this.photoNumber--;
      if(this.photoNumber < 2){
        this.disablePrev = true;
      }
      if(this.photoNumber <100 ){
        this.disableNext = false;
      }
      this.photosService.getPhoto(this.photoNumber).subscribe(photo=>{
        console.log(photo);
        this.photo = photo;
      });
    }
    onNext(){
      this.photoNumber++;
      if(this.photoNumber > 1){
        this.disablePrev = false;
      }
      if(this.photoNumber > 99){
        this.disableNext = true;
      }
      this.photosService.getPhoto(this.photoNumber).subscribe(photo=>{
        console.log(photo);
        this.photo = photo;
});
    }
}

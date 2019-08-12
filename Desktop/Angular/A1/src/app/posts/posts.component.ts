import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Posts } from '../model/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   
  disablePrev: boolean = true;
  disableNext: boolean = false;
  postNumber: number=1;
  posts: Posts[];
  post: Posts;
  setAttribute: boolean;
  removeAttribute: boolean;
  
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPost(this.postNumber).subscribe(post =>{
      //console.log(post);
      this.post = post;
    });
  }
    
    onPrev(){
     
      this.postNumber--;
      if(this.postNumber < 2){
        this.disablePrev = true;
      }
      if(this.postNumber <100 ){
        this.disableNext = false;
      }
      this.postService.getPost(this.postNumber).subscribe(post=>{
        this.post = post;
      
      });
    }
    onNext(){
      this.postNumber++;
      if(this.postNumber > 1){
        this.disablePrev = false;
      }
      if(this.postNumber > 99){
        this.disableNext = true;
      }
      this.postService.getPost(this.postNumber).subscribe(post=>{
        console.log(post);
        this.post = post;
    
    });
  }
}

import { Component, OnInit } from '@angular/core';
//import { PostService } from '../post.service';
//import { Posts } from '../model/posts.interface';
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  //UserId: number;
  //Id: number;
  //Title: string;
  //Body: string;
 //posts: Posts[];
 //post = {
   //userid: 101,
   //id: 101,
   //title: 'kkk',
   //body: 'ddd'

 
  constructor(
   // private postService: PostService
      ) { }

  ngOnInit() {

  //this.httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe(data =>{
   //this.posts = data;
   //console.log(this.posts);
  
  //this.UserId = data[0].userId;
  //this.Id = data[0].id;
  //this.Title = data[0].title;
  //this.Body = data[0].body;
   
  //this.postService.getPosts().subscribe(Posts => {
   //this.posts[] = Posts;
    //});
    //this.postService.getposts().subscribe(data => {
     // console.log(data);
   // }, err => {
     // console.log('err: ', err)
   // }, () => {
     // console.log('complete: ');

    //});
    //this.postService.postPosts();
   
  
 // }
  //);
  }}
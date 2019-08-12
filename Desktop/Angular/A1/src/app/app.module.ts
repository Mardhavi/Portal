import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { C1Component } from './c1/c1.component';
import { PostService } from './post.service';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './comments.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagingComponent } from './paging/paging.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsService } from './albums.service';
import { PhotosComponent } from './photos/photos.component';
import { PhotosService } from './photos.service';
import { AlbumDetailsComponent } from './album-details/album-details.component';

@NgModule({
  declarations: [
    AppComponent,
    //C1Component,
    PostsComponent,
    CommentsComponent,
    NavbarComponent,
    PageNotFoundComponent,
    PagingComponent,
    CommentDetailsComponent,
    AlbumsComponent,
    PhotosComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    CommentsService,
    AlbumsService,
    PhotosService
  ],
  bootstrap: [AppComponent],
  })
export class AppModule { }

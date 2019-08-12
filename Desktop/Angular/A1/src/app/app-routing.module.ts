import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component'
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routes: Routes = [
  {path:'posts', component: PostsComponent },
  {path: 'comments', component: CommentsComponent},
  {path: 'comments/:id', component: CommentDetailsComponent},
  //{path:'albums', component: AlbumsComponent},
  {path:'albums', component: AlbumsComponent, children: [
    {path: ':id', component: AlbumDetailsComponent}
  ]},
 //{path: 'albums/:id', component: AlbumDetailsComponent},
  {path:'photos', component: PhotosComponent},
  {path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

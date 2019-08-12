import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comments } from '../model/comments.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  //commentNumber: number=0;
  comments: Comments[];
  //comment: Comments;
  
  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
  this.commentsService.getcomments().subscribe(comments => {
    this.comments = comments;
  }
  );
  }

}

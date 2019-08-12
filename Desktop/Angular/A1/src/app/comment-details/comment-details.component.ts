import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { CommentsService } from '../comments.service';
import { Comments } from '../model/comments.interface';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

   comment:Comments;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pmap =>{
      //console.log('pmap ', +pmap.get('id'));
      this.commentsService.getComment(+pmap.get('id')).subscribe(comment =>{
        this.comment = comment;

      });
    });
    
  }

  onBack(){
    this.router.navigate(['/comments']);
  }
}


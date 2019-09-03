import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile} from '../model/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: Profile[];
  constructor(
    private router: Router,
    private postService : PostService
  ) { }

  ngOnInit() {
    this.postService.getprofile().subscribe(profile =>{
      console.log(this.profile = profile);
      this.profile = profile;
  });
  }
onBack(){
  this.router.navigate(['/home']);
}
onUpdate(){
  
}
}

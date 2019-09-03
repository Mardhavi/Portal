import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project} from '../model/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 project: Project[];
  constructor(
    private router: Router,
    private postService : PostService
  ) { }

  ngOnInit() {
    this.getProject();
    
}
getProject(){
  this.postService.getprojects().subscribe(project =>{
    console.log(this.project = project);
    this.project = project;
});
}
onDelete(id: number){
  console.log("deleted: ", id);
  this.postService.deleteProject(id).subscribe(project =>{
    this.getProject();
    //this.project= project;
    // this.postService.getprojects().subscribe(project =>{
    //   this.project = project;
    // });
  });
}
  onBack(){
    this.router.navigate(['/home']);
  }
  // onInfo(){
    
  //   this.postService.getprofile().subscribe(profile =>{
  //     console.log(this.profile = profile);
  //     this.profile = profile;
  //   })
  }


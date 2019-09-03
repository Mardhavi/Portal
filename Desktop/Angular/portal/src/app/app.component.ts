import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';

  constructor(private router: Router){
  }
  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/login']);
}
onBack(){
  this.router.navigate(['']);
}
}

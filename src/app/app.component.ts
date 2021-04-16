import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diet Recommendation';

  constructor(private router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if(!user){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/dashboard']);
    }
  }
}

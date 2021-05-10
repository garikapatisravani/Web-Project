import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diet Recommendation';
  user: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    if(!this.user){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/dashboard']);
    }
  }

  logOut() {
    this.user = null;
    localStorage.removeItem("currentUser");
    this.router.navigate(['/login']);
  }
}

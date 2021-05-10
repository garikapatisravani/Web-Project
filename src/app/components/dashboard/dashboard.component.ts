import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: any;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    this._snackBar.open('Welcome '+this.currentUser.fullname +'!','', {
      duration: 2000,
    });
  }

}

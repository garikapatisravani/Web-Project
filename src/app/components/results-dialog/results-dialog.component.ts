import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-results-dialog',
  templateUrl: './results-dialog.component.html',
  styleUrls: ['./results-dialog.component.css']
})
export class ResultsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public results) {}

  ngOnInit(): void {
  }

}

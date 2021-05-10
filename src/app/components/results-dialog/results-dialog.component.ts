import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-results-dialog',
  templateUrl: './results-dialog.component.html',
  styleUrls: ['./results-dialog.component.css']
})
export class ResultsDialogComponent implements OnInit {

  recipeDetail: any;

  constructor(@Inject(MAT_DIALOG_DATA) public results, private generalService: GeneralService) {}

  ngOnInit(): void {
    this.getRecipeDetails(this.results);
  }

  getRecipeDetails(id) {
    this.generalService.getRecipeInfo(id).subscribe(details => {
      console.log('Recipe detail info ##########', details);
      this.recipeDetail = details;
    })
  }
}

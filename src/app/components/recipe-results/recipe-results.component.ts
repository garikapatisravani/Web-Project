import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GeneralService } from 'src/app/general.service';
import { ResultsDialogComponent } from '../results-dialog/results-dialog.component';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.css']
})
export class RecipeResultsComponent implements OnInit {

  results: any[] = [];

  constructor(private generalService: GeneralService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.generalService.getUpdatedRecipeResults.subscribe(data => {
      this.results = data;
    })
  }

  getRecipeDetails(id) {
    this.dialog.open(ResultsDialogComponent, {
      data: id
    });
  }

}

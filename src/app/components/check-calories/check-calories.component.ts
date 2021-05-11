import { GeneralService } from 'src/app/general.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResultsDialogComponent } from '../results-dialog/results-dialog.component';

@Component({
  selector: 'app-check-calories',
  templateUrl: './check-calories.component.html',
  styleUrls: ['./check-calories.component.css']
})
export class CheckCaloriesComponent implements OnInit {

  calorieForm: FormGroup;
  caloriesCount: any;
  currentUser;
  favList: any[];

  constructor(private formBuilder: FormBuilder, private service: GeneralService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.calorieForm = this.formBuilder.group(
    //   {
    //     name: ['', Validators.required],
    //   }
    // );
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser")).token;
    this.service.getFavorite(this.currentUser).subscribe((data: any) => {
      if(data && data.length) {
        this.favList = data[0].favourites;
      }
    })
  }

  // onAnalyze(){
  //   this.service.getCalorieCount(this.calorieForm.value.name).subscribe(data => this.caloriesCount = data)
  //   console.log("daaata",this.caloriesCount);
  // }

  getRecipeDetails(id) {
    this.dialog.open(ResultsDialogComponent, {
      data: id
    });
  }
}

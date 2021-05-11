import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-results-dialog',
  templateUrl: './results-dialog.component.html',
  styleUrls: ['./results-dialog.component.css']
})
export class ResultsDialogComponent implements OnInit {

  currentUser;
  recipeDetail: any;
  currentFavItem;

  constructor(@Inject(MAT_DIALOG_DATA) public results, private generalService: GeneralService) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser")).token;
    this.getRecipeInfo(this.results);
  }

  getRecipeInfo(id) {
    this.generalService.getRecipeInfo(id).subscribe(details => {
      this.recipeDetail = details;
    })
  }

  addToFav(item) {
    this.currentFavItem = {
      title: item.title,
      id: item.id,
      image: item.image
    };
    this.getFav();
  }

  updateFav(obj) {
    this.generalService.updateToFavorite(obj).subscribe(details => {
      console.log('Recipe detail info ##########', details);
      this.recipeDetail = details;
    })
  }

  addFav(item) {
    this.generalService.addToFavorite(item).subscribe(details => {
      console.log('Recipe detail info ##########', details);
      this.recipeDetail = details;
    })
  }

  getFav(){
    this.generalService.getFavorite(this.currentUser).subscribe((data: any)=>{
      if(data && data.length){
        const favObj = data;
        favObj[0].favourites.push(this.currentFavItem);
        this.updateFav(favObj);
      } else {
        let obj = {
          userid: this.currentUser,
          favourites: [this.currentFavItem]
        }
        this.addFav(obj);
      }
    })
  }
}

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
    this.addToFav(this.results);
    this.currentUser = sessionStorage.getItem('token');
  }

  addToFav(item) {
    this.currentFavItem = item;
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
      if(data){
        const favObj = data;
        favObj.favs.push(this.currentFavItem);
        this.updateFav(favObj);
      } else {
        let obj = {
          userid: this.currentUser,
          favs: this.currentFavItem
        }
        this.addFav(obj);
      }
    })
  }
}

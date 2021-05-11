import { GeneralService } from 'src/app/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {

  recipeList = [];

  constructor(private service: GeneralService) { }

  ngOnInit(): void {
    let recipeValue;
    this.service.recipetitle.subscribe(data=>{
      recipeValue = data;
    })
    this.service.getRecipes(recipeValue).subscribe((response: any) => {
      this.recipeList = response.hits;
      console.log("recipe data", response);
    }, err => {
      console.log("Failed to get Recipe for "+recipeValue+" . Error is "+err);
    })
  }
  }

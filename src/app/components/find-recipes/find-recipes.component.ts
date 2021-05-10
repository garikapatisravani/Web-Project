import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ResultsDialogComponent } from '../results-dialog/results-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-recipes',
  templateUrl: './find-recipes.component.html',
  styleUrls: ['./find-recipes.component.css']
})
export class FindRecipesComponent implements OnInit {

  panelOpenState = false;
  findByNutrientsForm: FormGroup;
  findByNutrientsResult: any[];

  constructor(private generalService: GeneralService, private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {

    this.findByNutrientsForm = this.formBuilder.group(
      {
        minCarbs: [''],
        maxCarbs: [''],
        minCalories: [''],
        maxCalories: [''],
        minProtein: [''],
        maxProtein: [''],
        minFat: [''],
        maxFat: [''],
        minFiber: [''],
        maxFiber: [''],
        minIron: [''],
        maxIron: ['']
      }
    );

    // this.generalService.recipeByIngredients('').subscribe(res => {
    //   console.log('Spoonacular response @@@@@@@@@@@', res);
    // })

    // this.generalService.getRecepies('Trinidadian Chicken Potato Curry').subscribe(response => {
    //   console.log('Recipes List@@@@@@@@@@', response);
    // })
  }

  findRecipeByNutrients() {
    console.log('Form result@@@@@@@', this.findByNutrientsForm.value);
    let value = this.findByNutrientsForm.value;
    // let nutrients = `minCarbs=${value.minCarbs}&maxCarbs=${value.maxCarbs}&minProtein=${value.minProtein}&maxProtein=${value.maxProtein}&minCalories=${value.minCalories}&maxCalories=${value.maxCalories}`
    // let nutrients = `minCarbs=${value.minCarbs}&maxCarbs=${value.maxCarbs}`;
    let nutrients = ``;
    Object.keys(value).map(item => {
      if(value[item] && value[item]!= '' && value[item].length) {
        nutrients +=`&${item}=${value[item]}`
      }
    })
    if(value && nutrients) {
      this.generalService.findByNutrients(nutrients).subscribe((res: any) => {
        console.log('response of recipes by ingredients@@@@@@', res);
        // this.findByNutrientsResult = res;
        this.showResults(res);
      })
    }
  }

  findRecipeByIngredients(value) {
    if(value){
      this.generalService.recipeByIngredients(value).subscribe(data => {
        this.showResults(data);
      })
    }
  }

  findRecipeByCusine(rules, cusine) {
    if(rules && cusine) {
      this.generalService.recipeByCusine(rules, cusine).subscribe((res: any) => {
        this.showResults(res.results);
        console.log('Data of recipe@@@@@@@@@@@', res.results);
      })
    }
  }

  showResults(res) {
    this.generalService.updateRecipeResults(res);
    this.router.navigate(['recipes'])
    // this.dialog.open(ResultsDialogComponent, {
    //   data: res
    // });
  }
}

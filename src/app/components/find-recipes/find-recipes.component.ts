import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-recipes',
  templateUrl: './find-recipes.component.html',
  styleUrls: ['./find-recipes.component.css']
})
export class FindRecipesComponent implements OnInit {

  panelOpenState = false;
  findByNutrientsForm: FormGroup;

  constructor(private generalService: GeneralService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.findByNutrientsForm = this.formBuilder.group(
      {
        lowCarbs: [''],
        highCarbs: [''],
        lowCal: [''],
        highCal: [''],
        lowProtein: [''],
        highProtein: [''],
        lowFat: [''],
        highFat: [''],
        lowFiber: [''],
        highFiber: [''],
        lowIron: [''],
        highIron: ['']
      }
    );

    this.generalService.recipeByIngredients('').subscribe(res => {
      console.log('Spoonacular response @@@@@@@@@@@', res);
    })
  }

  findRecipeByNutrients() {
    console.log('Form result@@@@@@@', this.findByNutrientsForm.value);
    let value = this.findByNutrientsForm.value;
    let nutrients = `minCarbs=${value.lowCarbs}&maxCarbs=${value.highCarbs}&minProtein=${value.lowProtein}&maxProtein=${value.highProtein}&minCalories=${value.lowCal}&maxCalories=${value.highCal}`
    if(value && value.highCarbs && nutrients) {
      this.generalService.findByNutrients(nutrients).subscribe(res => {
        console.log('response of recipes by ingredients@@@@@@', res);
      })
    }
  }

}

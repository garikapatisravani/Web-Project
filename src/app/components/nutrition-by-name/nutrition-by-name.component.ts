import { GeneralService } from 'src/app/general.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nutrition-by-name',
  templateUrl: './nutrition-by-name.component.html',
  styleUrls: ['./nutrition-by-name.component.css']
})
export class NutritionByNameComponent implements OnInit {

  nutritionForm: FormGroup;
  nutrition: any[];
  constructor(private formBuilder: FormBuilder, private service: GeneralService) { }

  ngOnInit(): void {
    this.nutritionForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
      }
    );
  }

  onFind(){
    this.service.getNutritionByName(this.nutritionForm.value.name).subscribe((data: any)=>{
      this.nutrition = data;
      console.log("daaaaattttttaaa",data)
    });
  }
}

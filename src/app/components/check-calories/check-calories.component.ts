import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-calories',
  templateUrl: './check-calories.component.html',
  styleUrls: ['./check-calories.component.css']
})
export class CheckCaloriesComponent implements OnInit {

  bmiForm: FormGroup;
  bmiResult: any;
  consideration: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bmiForm = this.formBuilder.group(
      {
        heightUnits: ['', Validators.required],
        weightUnits: ['', Validators.required],
        weight: ['', Validators.required],
        height: ['', [Validators.required]]
      }
    );
  }

  calculate() {
    if(!this.bmiForm.valid) {
      return;
    } else {
      console.log('Bmi form',this.bmiForm.value);
      let formData = this.bmiForm.value;
      if(formData.weightUnits === 'kgs') {
        formData.weight *= 2.204
      }
      if(formData.heightUnits === 'cms') {
        formData.height *= 0.393; 
      } 
      console.log('BMI Value@@@@@@', (formData.weight / formData.height / formData.height ) * 703);
      this.bmiResult = (formData.weight / formData.height / formData.height ) * 703;
      if(this.bmiResult < 18.5){
        this.consideration = 'Under Weight';
      } else if(this.bmiResult > 18.5 && this.bmiResult < 24.9) {
        this.consideration = 'Normal Weight';
      } else if(this.bmiResult > 25 && this.bmiResult < 29.9) {
        this.consideration = 'Over Weight';
      } else if(this.bmiResult > 30) {
        this.consideration = 'Obesity';
      }
    }
  }

}

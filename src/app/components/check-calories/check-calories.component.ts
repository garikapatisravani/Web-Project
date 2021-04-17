import { GeneralService } from 'src/app/general.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-calories',
  templateUrl: './check-calories.component.html',
  styleUrls: ['./check-calories.component.css']
})
export class CheckCaloriesComponent implements OnInit {

  calorieForm: FormGroup;
  caloriesCount: any;
  

  constructor(private formBuilder: FormBuilder, private service: GeneralService) { }

  ngOnInit(): void {
    this.calorieForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
      }
    );
  }

  onAnalyze(){
    this.service.getCalorieCount(this.calorieForm.value.name).subscribe(data => this.caloriesCount = data)
    console.log("daaata",this.caloriesCount);
  }
}
